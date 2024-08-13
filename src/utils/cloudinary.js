import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_CLOUD_KEY, 
        api_secret: process.env.CLOUDINARY_CLOUD_SECRT // Click 'View API Keys' above to copy your API secret
    });


    const uploadOnCloudinary = async (localFilePath) => {
        try{
            if(!localFilePath) return null
            // upload the file on cloudinary
            const respose = await cloudinary.uploader.upload(localFilePath, {
                resource_type:"auto"
            })
            //file has been uploded successfull
            console.log("file is uploaded on cloudinary", respose.url);
            return respose;

        }catch(error){
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation fot failed
            return null;
        }
    }


cloudinary.v2.uploader.upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
            public_id: 'shoes',
        },
        function(error, result) {console.log(result); }
    );


    export {uploadOnCloudinary}
   