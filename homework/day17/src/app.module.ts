import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    // BoardModule, // 주석을 쓰면 안합쳐짐
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'src/common/graphql/schma.gql',
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my_database',
      port: 3306,
      username: 'root',
      password: '11',
<<<<<<< HEAD
=======

>>>>>>> ce6ddf76232d33d7b89bbbb48161b9b60a3ed9ce
      database: 'myproject',
      entities: [__dirname+"/apis/**/*.entity.*"],
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
