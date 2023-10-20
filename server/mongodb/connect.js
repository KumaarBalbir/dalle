import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using the provided URL.
 *
 * @param {string} url - The URL of the MongoDB database.
 * @return {Promise} A promise that resolves when the connection is successful,
 *                   or rejects with an error message if the connection fails.
 */
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
