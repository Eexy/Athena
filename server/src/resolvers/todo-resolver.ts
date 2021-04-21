import { Todo } from "../entity/todo";
import { Todo as TModel } from "../models/todo";
import { Resolver, Query, Arg, Mutation, InputType, Field } from "type-graphql";

@Resolver(Todo)
export class TodoResolver {
  @Query((_) => Todo, { nullable: true })
  async todo(@Arg("id") id: string): Promise<Todo | null> {
    const todo = await TModel.findById(id);

    if (!todo) {
      return null;
    }

    return todo;
  }

  @Mutation((_) => Todo)
  async createTodo(@Arg("desc") desc: string): Promise<Todo> {
    const todo = new TModel({ desc });
    await todo.save();

    return todo;
  }

  @Mutation((_) => Boolean)
  async deleteTodo(@Arg("id") id: string): Promise<Boolean> {
    await TModel.findByIdAndDelete(id);

    return true;
  }

  @Mutation((_) => Todo)
  async updateTodoStatus(
    @Arg("id") id: string,
    @Arg("isCompleted") isCompleted: boolean
  ): Promise<Todo> {
    const todo = await TModel.findById(id);

    if(!todo){
      throw new Error("Unable to find todo to update");
    }

    try{
      todo.completed = isCompleted;
      await todo.save();
    }catch(e){
      throw new Error("Unable to update todo");
    }

    return todo;
  }
}
