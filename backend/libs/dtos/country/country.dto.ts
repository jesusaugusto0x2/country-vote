import { ZCountry } from 'libs/schemas';
import { createZodDto } from 'nestjs-zod';

export class CountryDto extends createZodDto(ZCountry) {}
