# u20780193 - Deliverable 1

# FROM node:20

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# WORKDIR /app/frontend

# COPY frontend/package*.json ./

# RUN npm install

# COPY frontend/ .

# RUN npm run build

# ENV PORT=3000

# CMD ["npm", "start"]

# EXPOSE 3000

FROM node:20

ENV PORT=3000

WORKDIR /app/frontend

COPY . .

RUN npm install 

CMD ["npm", "start"]

EXPOSE 3000