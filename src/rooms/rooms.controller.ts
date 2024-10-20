import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateRoomDto } from './create-room.dto';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';
import { UpdateRoomDto } from './update-room.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomsService.update(id, updateRoomDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Room> {
    return this.roomsService.remove(id);
  }
}
