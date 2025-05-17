FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

FROM node:20-slim AS runner

WORKDIR /dist

COPY --from=builder /app/dist ./
COPY --from=builder /app/package*.json ./

RUN npm install

CMD ["node","server.js"]

