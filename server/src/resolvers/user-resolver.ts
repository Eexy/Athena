import { User } from "../entity/user";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserResponse } from "../entity/user-response";
import { User as UModel } from "../models/user";

@Resolver(User)
export class UserResolver {
  @Query((_) => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const res: UserResponse = { ok: false};
    try{
      const user = await UModel.findUser(email, password);
      res.ok = true;
      res.token = user.generateAuthToken();
    }catch(e){
      res.message = e.message;
    }
    return res;
  }

  @Mutation((_) => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const user = new UModel({ email, password });
    const res : UserResponse = {ok: false}
    try{
      await user.save();
      res.ok = true;
      res.token = user.generateAuthToken();
    }catch(e){
      if(e.message.includes("`password` is required")){
        res.message = "password is required";
      }else if(e.message.includes("`email` is required")){
        res.message = "email is required";
      }
    }

    return res;
  }
}
