import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  artist_id?: string;
  name?: string;
  year?: Date;
}
