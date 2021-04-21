import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserResponse {
  @Field()
  ok: boolean = false;

  @Field({ nullable: true })
  token?: string = "";

  @Field({ nullable: true })
  message?: string = "";
}
