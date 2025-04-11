import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Pizza {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  image: string;
}
