import { Module } from '@nestjs/common';
import { BoardsModule } from 'src/boards/boards.module';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  imports: [BoardsModule],
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule {}
