# Etapa de compilación
FROM node:18.16.0-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa de producción
FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist/crud-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
