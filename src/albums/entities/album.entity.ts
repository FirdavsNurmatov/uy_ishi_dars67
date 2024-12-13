import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Artist } from 'src/artists/entities/artist.entity';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Artist.name })
  artist_id: Artist;

  @Prop()
  name: string;

  @Prop({ type: Date })
  year: Date;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
