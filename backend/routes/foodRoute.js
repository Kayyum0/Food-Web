import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

//Image Storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
     return cb(null,'${Date.now()}${file.orignalname}')
    }
})
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)



export default foodRouter;

// import express from "express";
// import { addFood } from "../controllers/foodController.js";
// import multer from "multer";

// const foodRouter = express.Router();

// // Set up multer storage if handling file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, file.originalname)
// });
// const upload = multer({ storage });

// // Route to add food item
// foodRouter.post("/add", upload.single('image'), addFood);

// export default foodRouter;
