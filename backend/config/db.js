import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kayyum:7218578216@cluster0.cvvu3.mongodb.net/food-web').then(()=>console.log("DB Connected !"));
}

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://kayyum:7218578216@cluster0.cvvu3.mongodb.net/food-web', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB Connected!");
//   } catch (error) {
//     console.error("DB Connection Error:", error.message);
//     process.exit(1);
//   }
// };

// export { connectDB };
