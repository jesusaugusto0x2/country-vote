import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { faker } from '@faker-js/faker'; // Importa faker

@Injectable()
export class UserSeed {
  private readonly logger = new Logger(UserSeed.name);

  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    const countryIds = (await this.prisma.country.findMany()).map(
      ({ id }) => id,
    );

    try {
      const users = Array.from({ length: 200 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        countryId: faker.helpers.arrayElement(countryIds),
      }));

      // Insertar los usuarios en la base de datos
      await this.prisma.user.createMany({
        data: users,
      });

      this.logger.log('Users seeded successfully!');
    } catch (error) {
      this.logger.error('Error when seeding users', error.stack);
    }
  }
}
