import mongoose, { Document, Model, Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validator: (v: string) => {
        if(!isEmail(v)){
          throw new Error("Invalid email");
        }
      }
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

schema.pre<IUserDocument>('save', async function(next){
  const user = this;

  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();
});

schema.methods.generateAuthToken = function(){
  const user = this;
  
  const payload = {
    id: user.id,
    date: Date.now()
  };

  const token: string = jwt.sign(payload, process.env.JWT_KEY!);

  return token;
}

schema.statics.findUser = async (email: string, password: string) => {
  const user = await User.findOne({email});

  if(!user){
    throw new Error('Unable to find user');
  }

  const match = await bcrypt.compare(password, user.password);

  if(!match){
    throw new Error("Incorrect password");
  }

  return user;
};

interface IUserDocument extends Document{
  id: string;
  email: string;
  password: string;
  generateAuthToken(): string;
}

interface IUserModel extends Model<IUserDocument>{
  findUser(email: string, password: string): any;
}


export const User: IUserModel = mongoose.model<IUserDocument,IUserModel>("User", schema);
