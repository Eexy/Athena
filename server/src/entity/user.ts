import { IsEmail } from "class-validator";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User{
  @Field((_) => ID)
  id: string = "";

  @Field((_) => String)
  @IsEmail()
  email: string = "";

  password: string = "";
}