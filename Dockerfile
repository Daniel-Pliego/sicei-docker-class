FROM node:18-alpine as builder
WORKDIR /sicei

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /sicei
COPY --from=builder /sicei/package.json .
COPY --from=builder /sicei/package-lock.json .
COPY --from=builder /sicei/next.config.mjs ./
COPY --from=builder /sicei/public ./public
COPY --from=builder /sicei/.next/standalone ./
COPY --from=builder /sicei/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["npm", "start"]