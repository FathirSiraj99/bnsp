import { Injectable } from '@nestjs/common';
import { CreateBeasiswaDto } from './dto/create-beasiswa.dto';
import { UpdateBeasiswaDto } from './dto/update-beasiswa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BeasiswaService {

  constructor(private readonly prisma : PrismaService){}

  async create(createBeasiswaDto: CreateBeasiswaDto) {
   return await this.prisma.beasiswa.create({
    data : createBeasiswaDto
   })
  }

  async findAll() {
    return await this.prisma.beasiswa.findMany({
    });
    
  }

  findOne(id: number) {
    return `This action returns a #${id} beasiswa`;
  }

  update(id: number, updateBeasiswaDto: UpdateBeasiswaDto) {
    return `This action updates a #${id} beasiswa`;
  }

  remove(id: number) {
    return `This action removes a #${id} beasiswa`;
  }
}
