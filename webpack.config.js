import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";
import CopyWebpackPlugin from "copy-webpack-plugin";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: "./src/index.js", 
    output: {
      path: path.resolve(__dirname, "build"), 
      filename: "bundle.js",
      publicPath: isProduction ? "/Overcast/" : "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/, 
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"], 
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
      new CopyWebpackPlugin({
        patterns: [
          { 
            from: "public",
            globOptions: {
              ignore: ["**/index.html"]
            },
          },
        ],
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    mode: isProduction ? "production" : "development",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      port: 3000, 
      hot: true, 
      open: true, 
    },
  };
};