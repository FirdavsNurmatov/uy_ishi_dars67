import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArtistDocument = HydratedDocument<Artist>;

@Schema()
export class Artist {
  @Prop()
  name: string;

  @Prop()
  grammy: boolean;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
