import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Pizza {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  image!: string;
}
