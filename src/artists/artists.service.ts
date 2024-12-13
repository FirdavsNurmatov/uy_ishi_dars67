import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './entities/artist.entity';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private readonly artistModel: Model<Artist>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    await this.artistModel.create(createArtistDto);
    return 'Created.';
  }

  async findAll() {
    const allData = await this.artistModel.find();
    return allData;
  }

  async findOne(id: string) {
    const data = this.artistModel.findById(id);
    return data;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    await this.artistModel.findByIdAndUpdate(id, updateArtistDto);
    const data = await this.artistModel.findById(id);
    return data;
  }

  async remove(id: string) {
    const data = this.artistModel.findByIdAndDelete(id);
    return data;
  }
}
