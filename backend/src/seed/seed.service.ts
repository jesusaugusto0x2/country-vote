import { Injectable } from '@nestjs/common';
import { CountrySeed } from './country/seed';

@Injectable()
export class SeedService {
  constructor(private readonly countrySeed: CountrySeed) {}

  async seedAll() {
    await this.countrySeed.seed();
  }
}
