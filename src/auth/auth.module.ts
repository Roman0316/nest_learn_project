import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from "../users/users.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import * as process from "node:process";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register(
      {secret: process.env.PRIVATE_KEY || 'PRIVATE',
      signOptions: {
        expiresIn: '24h',
      }})
  ],
  exports: [
    AuthService,
    JwtModule,
  ],
})
export class AuthModule {}
