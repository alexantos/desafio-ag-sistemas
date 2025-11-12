import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Convite } from './convite.entity';
import { ConviteService } from './convite.service';


@Controller('convite')
export class ConviteController {

    constructor(private readonly conviteService: ConviteService) { }

    @Post()
    criar(@Body() convite: Partial<Convite>): Promise<Convite> {
        return this.conviteService.criar(convite)
    }

    @Get()
    listar(@Query('nome') nome: string): Promise<Convite[]> {
        return this.conviteService.listar(nome);
    }

    @Get(':id')
    recuperar(@Param('id') id: string): Promise<Convite> {
        return this.conviteService.recuperar(id);
    }

    @Patch(':id')
    atualizar(@Param('id') id: string, @Body() convite: Partial<Convite>): Promise<Convite> {
        return this.conviteService.atualizar(id, convite);
    }

    @Delete(':id')
    remover(@Param('id') id: string): Promise<void> {
        return this.conviteService.remover(id);
    }
}