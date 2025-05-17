import app from "./app";
import { configDotenv } from 'dotenv'
import { connectDB } from "./config/db";
configDotenv()

const PORT = process.env.PORT || 5000;

const StartServer = async() => {
  try {
   await connectDB()
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log(error);
    process.exit(1)

  }
}


StartServer()