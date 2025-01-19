import { ZCountryWithVotes } from 'libs/schemas';
import { createZodDto } from 'nestjs-zod';

export class CountryWithVotesDto extends createZodDto(ZCountryWithVotes) {}
