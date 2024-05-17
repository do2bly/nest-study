import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [BoardsModule, TestModule],
})
export class AppModule {}
