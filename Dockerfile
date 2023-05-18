# Installing Dependencies
FROM node:alpine AS BUILD
WORKDIR /home/node/app
# package.json and package-lock.json copied to start the installation
COPY package*.json ./
# Do not install DevDependencies
RUN npm install --omit=dev
# Remove test and other non production files/dependencies in the node_modules
RUN npm prune --production
# Remove unused files/dependencies across the image
RUN wget -q https://gobinaries.com/tj/node-prune | sh
# Remove swc build time compiler, as it is only required at build time
RUN rm node_modules/@next/swc* -r

# Building the Actual Image
FROM node:alpine AS deps
WORKDIR /home/node/app
COPY package.json next.config.js ./
COPY .next .next
COPY public public
COPY --from=BUILD /home/node/app/node_modules node_modules
CMD ["npm", "start"]