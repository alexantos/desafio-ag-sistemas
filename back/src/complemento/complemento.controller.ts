import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Complemento } from './complemento.entity';
import { ComplementoService } from './complemento.service';


@Controller('complemento')
export class ComplementoController {

    constructor(private readonly complementoService: ComplementoService) { }

    @Post()
    criar(@Body() complemento: Partial<Complemento>): Promise<Complemento> {
        return this.complementoService.criar(complemento)
    }

    @Get()
    listar(@Query('nome') nome: string): Promise<Complemento[]> {
        return this.complementoService.listar(nome);
    }

    @Get(':id')
    recuperar(@Param('id') id: string): Promise<Complemento> {
        return this.complementoService.recuperar(id);
    }

    @Patch(':id')
    atualizar(@Param('id') id: string, @Body() cliente: Partial<Complemento>): Promise<Complemento> {
        return this.complementoService.atualizar(id, cliente);
    }

    @Delete(':id')
    remover(@Param('id') id: string): Promise<void> {
        return this.complementoService.remover(id);
    }
}