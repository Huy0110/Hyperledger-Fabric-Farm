FROM my-composer-rest-server:0.19.5

RUN npm install --production loopback-connector-mongodb passport-jwt && \
    npm cache clean --force && \
    ln -s node_modules .node_modules

COPY custom-jwt.js node_modules/custom-jwt.js

COPY .composer /home/composer/.composer
