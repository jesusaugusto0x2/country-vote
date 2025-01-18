import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';

async function runSeeds() {
  const app = await NestFactory.createApplicationContext(SeedModule);
  const seedService = app.get(SeedService);
  console.log('🌱 Deleting all data...');
  await seedService.deleteAll();

  console.log('🌱 Seeding process started...');
  await seedService.seedAll();

  console.log('🌱 Seeding process completed!');
  await app.close();
}

runSeeds().catch((error) => {
  console.error('Error running seeds:', error);
  process.exit(1);
});
