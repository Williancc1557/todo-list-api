import { config } from "dotenv";

config();

export default {
  mongoUrl: process.env.MONGO_URL || "mongodb://localhost:27017/todo-list",
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  port: process.env.PORT || 8080,
  secretAccessTokenJwt: process.env.SECRET_JWT || "secret_jwt",
  state: process.env.STATE || "development",
};
