import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [VotesService],
  controllers: [VotesController],
  exports: [VotesService],
  imports: [PrismaModule],
})
export class VotesModule {}
