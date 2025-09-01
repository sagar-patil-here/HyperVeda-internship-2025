import mongoose from "mongoose";


const infoSchema = new mongoose.Schema({

    name:String,
    branch : String,
    mobile : String,
    email : String

})

const Info = mongoose.model("Info", infoSchema);

export default Info;