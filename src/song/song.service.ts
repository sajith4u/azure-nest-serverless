import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { Song } from './entities/song.entity';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const songDBItem: Song = {
      name: createSongDto.name,
      id: 100,
      artist: 'Demo',
      imageUrl: 'https://demo.url',
      isActive: true,
    };

    return this.songRepository.save(songDBItem);
  }

  async findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
