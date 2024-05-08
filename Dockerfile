FROM node:20-alpine3.18

# this is a development Dockerfile
# and is not intended for production use
WORKDIR /var/www/ui

COPY package.json /var/www/ui/
COPY yarn.lock /var/www/ui/
RUN yarn install

COPY . /var/www/ui

# this what make hot reloading works
# because you are starting your project
# in the same way you running it locally
RUN yarn run build
CMD yarn start