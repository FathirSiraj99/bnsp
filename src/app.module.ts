import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { BeasiswaModule } from './beasiswa/beasiswa.module';

@Module({
  imports: [PrismaModule, PrismaModule, BeasiswaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
