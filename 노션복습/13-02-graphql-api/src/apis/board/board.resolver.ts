import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String)
  fetchBoard():string{
    return this.boardService.findAll();
  }

  @Mutation(()=>String)
  createBoard():string{
    return this.boardService.create();
  }
}
