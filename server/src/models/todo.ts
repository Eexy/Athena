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
}

export const Todo: Model<ITodo> = mongoose.model("Todo", schema);
