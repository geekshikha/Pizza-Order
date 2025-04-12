import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PizzaModule } from './pizza/pizza.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PizzaModule,
    PrismaModule,
  ],
})
export class AppModule {}
