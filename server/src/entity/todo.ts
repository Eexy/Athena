import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Todo{
  @Field((_) => ID)
  id: string = "";

  @Field()
  desc: string = "";

  @Field()
  completed: boolean = false;

  owner: string = "";
}

