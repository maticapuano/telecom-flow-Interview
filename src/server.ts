import { app } from "./app";
import dotenv from "dotenv";
import path from "path";

const PORT = process.env.PORT || 3000;

//Configure variables env
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
