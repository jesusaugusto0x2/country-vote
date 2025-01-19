import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Country } from '@prisma/client';
import { CountriesService } from './countries.service';
import { CountryDto, CountryWithVotesDto } from 'libs/dtos';
import { CountryWithVotes } from 'libs/schemas';

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

  @Get('/with-votes')
  @ApiOperation({ summary: 'Get all countries with votes' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all countries with votes',
    type: [CountryWithVotesDto],
  })
  async getCountriesWithVotes(
    @Query('search') search?: string,
  ): Promise<CountryWithVotes[]> {
    return this.countriesService.getCountriesWithVotes(search);
  }
}
