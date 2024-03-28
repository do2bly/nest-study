import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardServices: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardServices.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardServices.createBoard(title, description);
  }
}
