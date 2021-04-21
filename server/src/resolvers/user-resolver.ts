import { User } from "../entity/user";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserResponse } from "../entity/user-response";
import {User as UModel} from "../models/user";

@Resolver(User)
export class UserResolver {
  @Query((_) => UserResponse)
  login(): UserResponse {
    const res: UserResponse = { ok: false, token: "" };

    return res;
  }

  @Mutation((_) => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const user = new UModel({email, password});

    try{
      await user.save();
    } catch(e){
      throw new Error("Unable to create user");
    }

    return {ok: true, token: ""};
  }
}
