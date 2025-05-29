const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Modo de Webpack: 'development' para desarrollo, 'production' para producción
  mode: 'development',

  // Punto de entrada de tu aplicación
  entry: './src/index.js',

  // Configuración de la salida
  output: {
    path: path.resolve(__dirname, 'dist'), // La carpeta donde se generará la salida
    filename: 'bundle.js', // El nombre del archivo JS empaquetado
    clean: true, // Limpia la carpeta 'dist' antes de cada construcción
    publicPath: '/'
  },

  // Configuración del servidor de desarrollo
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'), // Servir archivos estáticos desde 'public'
    },
    compress: true, // Habilitar la compresión gzip
    port: 3000, // Puerto donde se ejecutará el servidor
    open: true, // Abrir el navegador automáticamente
    hot: true, // Habilitar Hot Module Replacement (HMR)
  },

  // Reglas para cómo Webpack maneja los diferentes tipos de módulos
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica esta regla a archivos .js y .jsx
        exclude: /node_modules/, // Excluye la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader para transpilarlos
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
      // Puedes añadir reglas para imágenes, fuentes, etc. aquí
    ],
  },

  // Configuración de resolución de extensiones
  resolve: {
    extensions: ['.js', '.jsx'], // Permite importar módulos sin especificar estas extensiones
  },

  // Plugins de Webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usa este archivo HTML como plantilla
      filename: 'index.html', // El nombre del archivo HTML de salida
    }),
  ],
};