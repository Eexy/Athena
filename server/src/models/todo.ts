import mongoose, { Document, Model, Schema } from "mongoose";

const schema: Schema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true
    },
    priority: {
      type: Number,
      default: 0,
      validator: (v: number) => {
        if(v < 0 || v > 4){
          throw new Error('Incorrect priority')
        }
      }
    }
  },
  {
    timestamps: true,
  }
);

interface ITodo extends Document {
  id: string;
  desc: string;
  completed: boolean;
  owner: string;
  priority: number;
}

schema.pre<ITodo>('save', function(next){
  const todo = this;
  if(todo.isModified('priority')){
    if(todo.priority < 0 || todo.priority > 4){
      throw new Error('Incorrect priority. Priority must be between 0 and 4')
    }
  }

  next();
})

export const Todo: Model<ITodo> = mongoose.model("Todo", schema);
