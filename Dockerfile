FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

FROM node:22-alpine

RUN npm i -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]