import { Injectable } from '@nestjs/common';
import { Vote } from '@prisma/client';
import { CreateVoteDto } from 'libs/dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  async createVote(data: CreateVoteDto): Promise<Vote> {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.userName,
          email: data.userEmail,
        },
      });

      return tx.vote.create({
        data: {
          countryId: data.countryId,
          userId: user.id,
        },
      });
    });
  }
}
