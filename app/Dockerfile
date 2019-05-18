# latest LTS
FROM node:10

RUN apt-get update
RUN apt-get install -y wget xvfb unzip apt-transport-https

# add yarn
RUN wget -q -O - https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install -y yarn

# add vue-cli
RUN yarn global add @vue/cli


WORKDIR /src
ADD . /src

RUN yarn install --silent
EXPOSE 8080

# start vue-cli dev server
CMD ["yarn", "serve"]