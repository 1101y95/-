import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarBucksModule } from './starbucks-menu/starbucks.module';
import { CoffeeDetail } from './starbucks-menu/starbucks.entity';

@Module({
  imports: [
    StarBucksModule, GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schma.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '11?',
      database: 'mysql',
      entities: [CoffeeDetail],
      synchronize: true,
      logging: true
    })
  ]
})
export class AppModule {}
