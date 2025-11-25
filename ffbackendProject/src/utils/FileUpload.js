import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) {
                console.log("file path does not exist...")
                return null;
            }
            // uploading file on Cloudinary using file path 
            const response = await cloudinary.uploader.upload
                (localFilePath, {
                    resource_type: "auto"
                })
            // file has been uploaded successfully
            console.log("file is uploaded on cloudinary at: ", response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath) // remove the file locally saved temporary file as the operation got failed
            console.log("file removed locally...")
            return null;
        }
    }

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });

    console.log(autoCropUrl);
})();