import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CountrySeed } from './country/seed';
import { SeedService } from './seed.service';
import { UserSeed } from './user/seed';
import { VoteSeed } from './vote/seed';

@Module({
  imports: [PrismaModule],
  providers: [SeedService, CountrySeed, UserSeed, VoteSeed],
  exports: [SeedService],
})
export class SeedModule {}
