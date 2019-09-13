import mongoose from 'mongoose';
import Types = mongoose.Types;
import ObjectId = Types.ObjectId;

let Schema =  mongoose.Schema;

export const EmployeeSchema = new Schema({
    name:String,
    Emp_id: Number,
    author: { type: 'ObjectId', ref: 'Person' },
    comments: [
      {
          type: Types.ObjectId,
          ref: "Comment"

      } 
  ]    
});

