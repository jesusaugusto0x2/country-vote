import { Injectable } from '@nestjs/common';
import { CountrySeed } from './country/seed';
import { UserSeed } from './user/seed';
import { VoteSeed } from './vote/seed';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly countrySeed: CountrySeed,
    private readonly userSeed: UserSeed,
    private readonly voteSeed: VoteSeed,
    private readonly prisma: PrismaService,
  ) {}

  async deleteAll() {
    await this.prisma.vote.deleteMany();
    await this.prisma.user.deleteMany();
    await this.prisma.country.deleteMany();
  }

  async seedAll() {
    await this.countrySeed.seed();
    await this.userSeed.seed();
    await this.voteSeed.seed();
  }
}
