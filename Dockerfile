# u20780193 - Deliverable 2

FROM node:20

ENV PORT=3000

WORKDIR /app

COPY . .

RUN npm install 

CMD ["npm", "start"]

EXPOSE 3000