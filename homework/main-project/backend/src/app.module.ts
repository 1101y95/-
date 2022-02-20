import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './apis/address/address.module';
import { AuthModule } from './apis/auth/auth.module';
import { PaymentModule } from './apis/payment/payment.module';
import { ProductDetailModule } from './apis/productDetail/productDetail.module';
import { ProductModule } from './apis/products/products.module';
import { UsersModule } from './apis/users/users.module';


@Module({
  imports: [
    // BoardModule, // 주석을 쓰면 안합쳐짐
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schma.gql',
    }),

    AddressModule,
    ProductDetailModule,
    ProductModule,
    UsersModule,
    AuthModule,
    PaymentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my_database',
      port: 3306,
      username: 'root',
      password: '12341234',
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
