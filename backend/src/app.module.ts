import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [PrismaModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
