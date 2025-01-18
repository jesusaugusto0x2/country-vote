import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SeedModule } from './seed/seed.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [PrismaModule, SeedModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
