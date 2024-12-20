import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './entities/album.entity';
import { Artist, ArtistSchema } from 'src/artists/entities/artist.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
