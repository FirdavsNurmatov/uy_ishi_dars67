import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/68-dars'),
    UsersModule,
    ArtistsModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
