import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { UserRepository } from './repositories/users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'userRepo',
      useClass: UserRepository,
    },
    {
      provide: 'apiKey',
      useValue: '12345',
    },
    {
      provide: 'randomString',
      useFactory: () => {
        return Math.random();
      },
    },
    UserRepository,
    UsersService,
  ],
})
export class UsersModule {}
