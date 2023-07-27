import mongoose from 'mongoose';
import { validateEmail } from '../utils/helper';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim: true,
        lowercase: true,
        unique:true,
        required:[true,'Email address is required'],
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required: true,
    },
    isProfileVerified:{
        type:Boolean,
        required: true,
    },
    code:{
        type:Number,
        required:true,
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt:{
        type:Date,
        required: true,
    }

})
const User = mongoose.model('User',userSchema);

module.exports=User;