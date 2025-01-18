import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from '@prisma/client';
import { CountriesService } from './countries.service';
import { CountryDto } from 'libs/dtos';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all countries',
    type: [CountryDto],
  })
  async getAllCountries(): Promise<Country[]> {
    return this.countriesService.getAllCountries();
  }
}
