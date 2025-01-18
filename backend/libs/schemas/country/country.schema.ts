import { z } from 'zod';

export const ZCountry = z.object({
  id: z.string().uuid(),
  name: z.string(),
  capitalCity: z.string(),
  region: z.string().nullable(),
  subRegion: z.string().nullable(),
});

export type Country = z.infer<typeof ZCountry>;
