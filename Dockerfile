FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY tsconfig.json ./tsconfig.json
COPY postcss.config.js ./postcss.config.js
COPY next.config.js ./next.config.js
COPY components.json ./components.json
COPY next-env.d.ts ./next-env.d.ts

RUN npm ci

CMD ["npm", "run", "dev"]