import { Todo } from "../entity/todo";
import { Todo as TModel } from "../models/todo";
import { Resolver, Query, Arg, Mutation } from "type-graphql";

@Resolver(Todo)
export class TodoResolver {
  @Query((_) => Todo, {nullable: true})
  async todo(@Arg("id") id: string): Promise<Todo | null> {
    const result = await TModel.findById(id);

    if (result === null) {
      return null;
    }

    const todo = {
      id: result.id,
      desc: result.desc,
      completed: result.completed,
    };

    return todo;
  }

  @Mutation((_) => Todo)
  async createTodo(@Arg("desc") desc: string): Promise<Todo> {
    const tmodel = new TModel({desc});
    await tmodel.save();

    const todo = {
      id: tmodel.id,
      desc,
      completed: tmodel.completed
    }

    return todo;
  }
}
