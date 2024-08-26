/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {

    constructor(private songsService:SongsService){}

    @Get()
    findAllSongs(){
        try{
           throw new Error("no songs");
            return this.songsService.findAll();

        }catch(err){

            throw new HttpException("nohjgh",HttpStatus.UNPROCESSABLE_ENTITY,{cause : err})

        }
       
    }
    
    @Post()
    create(@Body() data : CreateSongDto){
     return this.songsService.create(data)
    }

    @Put(':id')
    findSong(@Param('id',new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE}))id : number){

    return "this is the id" + id;

    }
}
