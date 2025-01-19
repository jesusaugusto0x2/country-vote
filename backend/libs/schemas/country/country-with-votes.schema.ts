import { z } from 'zod';
import { ZCountry } from './country.schema';

export const ZCountryWithVotes = ZCountry.extend({
  _count: z.object({
    votes: z.number(),
  }),
});

export type CountryWithVotes = z.infer<typeof ZCountryWithVotes>;
