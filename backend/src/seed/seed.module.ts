import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CountrySeed } from './country/seed';
import { SeedService } from './seed.service';
import { UserSeed } from './user/seed';

@Module({
  imports: [PrismaModule],
  providers: [SeedService, CountrySeed, UserSeed],
  exports: [SeedService],
})
export class SeedModule {}
