import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VotesService } from './votes.service';
import { Vote } from '@prisma/client';
import { CreateVoteDto } from 'libs/dtos';
import { ZCreateVote } from 'libs/schemas';

@ApiTags('votes')
@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a vote' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The vote has been successfully created.',
    type: CreateVoteDto,
  })
  @ApiBody({ type: CreateVoteDto })
  async createVote(@Body() createVoteDto: CreateVoteDto): Promise<Vote> {
    try {
      ZCreateVote.parse(createVoteDto);
      return this.votesService.createVote(createVoteDto);
    } catch (e) {
      throw new BadRequestException(e.errors);
    }
  }
}
