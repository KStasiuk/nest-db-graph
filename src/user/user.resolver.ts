import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query(() => UserEntity)
  async user(@Args('id') id: string): Promise<UserEntity | undefined> {
    return await this.userService.findOne(id);
  }

  @Query(() => [UserEntity])
  async users(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => UserEntity)
  async createUser(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('age') age: string,
  ): Promise<UserEntity> {
    return await this.userService.create({ name, description, age });
  }
}
