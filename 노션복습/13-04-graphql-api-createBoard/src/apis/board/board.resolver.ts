import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  createBoard(
    @Args("writer") writer : string,
    @Args("title") title: string,
    @Args("contents") contents: string
  ): string {
    return this.boardService.create();
  }
}
