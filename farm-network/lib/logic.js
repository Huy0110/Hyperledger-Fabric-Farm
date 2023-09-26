'use strict';
/**
 * Write your transaction processor functions here
 */

/**
 * Add Project Info transaction
 * @param {org.farm.network.AddProjectInfo} addProjectInfo
 * @transaction
 */
async function addProjectInfo(addProjectInfo) {
    // Get the project asset to update.
    const project = addProjectInfo.project;

    // Add the new information to the project's info array.
    project.projectInfo.push(addProjectInfo.newInfo);

    // Get the asset registry for the project.
    const projectRegistry = await getAssetRegistry('org.farm.network.Project');

    // Update the project in the asset registry.
    await projectRegistry.update(project);

    // Emit an event for the added project information.
    let event = getFactory().newEvent('org.farm.network', 'ProjectInfoAdded');
    event.project = project;
    event.addedInfo = addProjectInfo.newInfo;
    emit(event);
}
