import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js", // Entry point for React app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for production builds
    filename: "bundle.js",                // JavaScript bundle filename
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handle .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules from transpilation
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Transpile React
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use public/index.html as the template
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these extensions in imports
  },
  mode: "development", // Dev mode for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from dist folder
    },
    port: 8080, // Dev server runs on localhost:8080
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
};
