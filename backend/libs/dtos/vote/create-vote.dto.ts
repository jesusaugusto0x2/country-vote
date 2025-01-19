import { ZCreateVote } from 'libs/schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateVoteDto extends createZodDto(ZCreateVote) {}
