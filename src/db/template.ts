import mongoose, { SchemaTypes } from 'mongoose';

const templateSchema = new mongoose.Schema({

    user:{
        type:SchemaTypes.ObjectId,
        ref:'User',
        required:true,
    },
    templateName:{
        type:String,
        required:true,
    },
    template:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});

const Template = mongoose.model('Template',templateSchema);

module.exports=Template;