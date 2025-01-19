import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SeedModule } from './seed/seed.module';
import { CountriesModule } from './countries/countries.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [PrismaModule, SeedModule, CountriesModule, VotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
