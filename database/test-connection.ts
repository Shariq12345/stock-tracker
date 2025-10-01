import "dotenv/config";
import { connectToDatabase } from "./mongoose";

(async () => {
  try {
    await connectToDatabase();
    console.log("Database connection test successful.");
  } catch (error) {
    console.error("Database connection test failed:", error);
    process.exit(1);
  }
})();
