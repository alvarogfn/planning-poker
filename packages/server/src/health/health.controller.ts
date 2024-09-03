import {Controller, Get} from '@nestjs/common';

@Controller('')
export class HealthController {

  @Get('/healthcheck')
  healthcheck() {
    return {status: 'ok'};
  }
}
