import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";

dotenv.config();

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
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"), 
      },
      {
        directory: path.resolve(__dirname, "public"),
      }
    ],
    port: 8080, // Dev server runs on localhost:8080
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
};
