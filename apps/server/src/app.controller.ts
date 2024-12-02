import { Controller, Get } from '@nestjs/common';
import { AppService, props } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('feed')
  getFeed(): props[] {
    return this.appService.getFeed();
  }
}
