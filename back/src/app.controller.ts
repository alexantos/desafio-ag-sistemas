import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dashboard')
  getHello(): object {
    let contexto = {
      'total_membros': 34,
      'total_indicacoes_mes': 12,
      'agradecimentos': 7,
    }
    return contexto;
  }
}
