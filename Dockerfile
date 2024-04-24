# Usa la imagen de Node.js 16 como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe) para instalar las dependencias
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Ejecuta la aplicación al iniciar el contenedor
CMD ["npm", "start"]