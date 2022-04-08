// Libraries
import express from "express";
// to process the file properly
import multer from "multer";
// import AWS from "aws-sdk";

// Database modal
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/s3";

// AWS s3 bucket config
// I don't have S3 so this will not work
// const s3Bucket = new AWS.S3({
//   accessKeyId: process.env.AWS_S3_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_S3_SECRET_KEY,
//   region: "ap-south-1",
// });

const Router = express.Router();

// Multer Config
// here untill the image is saved in S3, it will be stored in ram of the server
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
// upload.single - uploading single file at once
// this will upload image to S3 and store the url to mongodb
// allowiing user to upload multiple files,
// here 4 at once
// this feature of ulploading multiple files not working so, reverting back to single file upload
Router.post("/", upload.array("file", 4), async (req, res) => {
  // Router.post("/", upload.single("file"), async (req, res) => {
  try {
    // ulpoad to S3
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "shapeaijunebatch123",
      Key: file.originalname,
      // buffer is the memory storage which is in ram will be stored in S3
      Body: file.buffer,
      // mimetype - image type
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    // const s3Upload = (options) => {
    //   return new Promise((resolve, reject) =>
    //     s3Bucket.upload(options, (error, data) => {
    //       if (error) return reject(error);
    //       return resolve(data);
    //     })
    //   );
    // };

    // this will return the url of the image
    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
