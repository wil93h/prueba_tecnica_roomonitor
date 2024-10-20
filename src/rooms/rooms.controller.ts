import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRoomDto } from './create-room.dto';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';
import { UpdateRoomDto } from './update-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Room> {
    return this.roomsService.remove(id);
  }
}
