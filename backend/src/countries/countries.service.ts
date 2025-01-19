import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Country } from '@prisma/client';
import { CountryWithVotes } from 'libs/schemas';

@Injectable()
export class CountriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCountries(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }

  async getCountriesWithVotes(search?: string): Promise<CountryWithVotes[]> {
    return this.prisma.country.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        capitalCity: true,
        region: true,
        subRegion: true,
        _count: {
          select: {
            votes: true,
          },
        },
      },
      orderBy: {
        votes: {
          _count: 'desc',
        },
      },
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });
  }
}
