import mongoose, { SchemaTypes } from 'mongoose';

const templateDataSchema = new mongoose.Schema({
    template:{
        type:SchemaTypes.ObjectId,
        ref:'Template',
        required:true,
    },
    data:{
        type:String,
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
});

const TemplateData = mongoose.model('TemplateData',templateDataSchema);

module.exports=TemplateData;