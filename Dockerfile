FROM node:18
WORKDIR /app
RUN npm install
EXPOSE 8000
CMD [“npm”, “start”]