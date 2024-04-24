import { Module } from '@nestjs/common';
import { BeasiswaService } from './beasiswa.service';
import { BeasiswaController } from './beasiswa.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BeasiswaController],
  providers: [BeasiswaService,PrismaService],
})
export class BeasiswaModule {}
