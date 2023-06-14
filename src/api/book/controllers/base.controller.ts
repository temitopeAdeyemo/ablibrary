import { Controller, Get } from '@nestjs/common';

@Controller()
export class BaseController {
  @Get()
  getBaseRoute() {
    return 'This is the base route';
  }
}
