import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Membro } from './membro.entity';
import { MembroService } from './membro.service';

@Controller('membro')
export class MembroController {

    constructor(private readonly membroService: MembroService) { }

    @Post()
    criar(@Body() membro: Partial<Membro>): Promise<Membro> {
        return this.membroService.criar(membro)
    }

    @Get()
    listar(@Query('nome') nome: string): Promise<Membro[]> {
        return this.membroService.listar(nome);
    }

    @Get(':id')
    recuperar(@Param('id') id: string): Promise<Membro> {
        return this.membroService.recuperar(id);
    }

    @Patch(':id')
    atualizar(@Param('id') id: string, @Body() cliente: Partial<Membro>): Promise<Membro> {
        return this.membroService.atualizar(id, cliente);
    }

    @Delete(':id')
    remover(@Param('id') id: string): Promise<void> {
        return this.membroService.remover(id);
    }
}