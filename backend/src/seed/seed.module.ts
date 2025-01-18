import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CountrySeed } from './country/seed';
import { SeedService } from './seed.service';

@Module({
  imports: [PrismaModule],
  providers: [SeedService, CountrySeed],
  exports: [SeedService],
})
export class SeedModule {}
