FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN corepack enable \
  && pnpm install \
  && pnpm run build

FROM caddy:2-alpine

COPY --from=builder /app/dist /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
