import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from 'src/artists/entities/artist.entity';
import { Model } from 'mongoose';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Artist.name) private readonly albumModel: Model<Album>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto) {
    console.log(createAlbumDto);
    const data = await this.albumModel.create(createAlbumDto);
    return data;
  }

  async findAll() {
    const allData = await this.albumModel.find();
    return allData;
  }

  findOne(id: string) {
    return `This action returns a #${id} album`;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: string) {
    return `This action removes a #${id} album`;
  }
}
