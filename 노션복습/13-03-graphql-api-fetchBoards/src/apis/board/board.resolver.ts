import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  fetchBoard(): Board[] {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(): string {
    return this.boardService.create();
  }
}
