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
  },
  {
    timestamps: true,
  }
);

interface Todo extends Document {
  id: string;
  desc: string;
  completed: boolean;
}

export const Todo: Model<Todo> = mongoose.model("Todo", schema);
