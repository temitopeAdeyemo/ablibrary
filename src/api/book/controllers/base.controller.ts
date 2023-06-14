import { Controller, Get } from '@nestjs/common';

@Controller()
export class BaseController {
  @Get()
  getBaseRoute() {
    return {
      statusCode: 200,
      success: true,
      message: 'This is the base route',
    };
  }
}
