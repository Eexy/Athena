import { IsInt, Max, Min } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Todo{
  @Field((_) => ID)
  id: string = "";

  @Field()
  desc: string = "";

  @Field()
  completed: boolean = false;

  @Field()
  @IsInt()
  @Min(0)
  @Max(4)
  priority: number = 0;

  owner: string = "";
}

