import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { faker } from '@faker-js/faker'; // Importa faker

@Injectable()
export class UserSeed {
  private readonly logger = new Logger(UserSeed.name);

  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    try {
      const users = Array.from({ length: 500 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
      }));

      await this.prisma.user.createMany({
        data: users,
      });

      this.logger.log('Users seeded successfully!');
    } catch (error) {
      this.logger.error('Error when seeding users', error.stack);
    }
  }
}
