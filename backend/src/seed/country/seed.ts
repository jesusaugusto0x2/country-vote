import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import axios from 'axios';
import { RestCountry } from './types';

@Injectable()
export class CountrySeed {
  private readonly logger = new Logger(CountrySeed.name);

  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    try {
      const { data } = await axios.get<RestCountry[]>(
        'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion',
      );

      const countries = data.map((country) => ({
        name: country.name.common,
        capitalCity: country.capital ? country.capital[0] : null,
        region: country.region,
        subRegion: country.subregion,
      }));

      await this.prisma.country.createMany({
        data: countries,
      });

      this.logger.log('Countries seeded successfully!');
    } catch (error) {
      this.logger.error('Error when seeding countries', error.stack);
    }
  }
}
