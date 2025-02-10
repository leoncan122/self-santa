FROM node:22.0.0

# Establecer el directorio de trabajo a /app (se creará internamente)
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json al directorio actual en el contenedor (/app)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que Vite usa por defecto
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]