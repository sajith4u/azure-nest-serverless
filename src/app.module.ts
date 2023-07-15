import { Module } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      ssl: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SongModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
