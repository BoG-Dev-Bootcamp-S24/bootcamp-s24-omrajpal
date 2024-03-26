import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : Number
});

export default mongoose.model("User", userSchema);