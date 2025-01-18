import { Injectable } from '@nestjs/common';
import { CountrySeed } from './country/seed';
import { UserSeed } from './user/seed';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly countrySeed: CountrySeed,
    private readonly userSeed: UserSeed,
    private readonly prisma: PrismaService,
  ) {}

  async deleteAll() {
    await this.prisma.user.deleteMany();
    await this.prisma.country.deleteMany();
  }

  async seedAll() {
    await this.countrySeed.seed();
    await this.userSeed.seed();
  }
}
