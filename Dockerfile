FROM node:20.15.0-alpine3.19

WORKDIR /app

COPY . .

RUN npm --legacy-peer-deps i;

RUN npm run build;

EXPOSE 3000

CMD ["npm", "start"]