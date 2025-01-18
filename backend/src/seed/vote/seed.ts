import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { faker } from '@faker-js/faker'; // Importa faker

@Injectable()
export class VoteSeed {
  private readonly logger = new Logger(VoteSeed.name);

  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    const countryIds = (await this.prisma.country.findMany()).map(
      ({ id }) => id,
    );
    const userIds = (await this.prisma.user.findMany()).map(({ id }) => id);

    try {
      const votes = userIds.map((userId) => ({
        userId,
        countryId: faker.helpers.arrayElement(countryIds),
        createdAt: faker.date.past(),
      }));

      await this.prisma.vote.createMany({
        data: votes,
      });

      this.logger.log('Votes seeded successfully!');
    } catch (error) {
      this.logger.error('Error when seeding votes', error.stack);
    }
  }
}
