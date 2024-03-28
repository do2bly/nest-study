import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TestModule } from "src/test/test.module";

@Module({
  imports: [TestModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
