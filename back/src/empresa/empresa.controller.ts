import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresa')
export class EmpresaController {

    constructor(private readonly empresaService: EmpresaService) { }


    @Post()
    criar(@Body() empresa: Partial<Empresa>): Promise<Empresa> {
        return this.empresaService.criar(empresa)
    }

    @Get()
    listar(@Query('nome') nome: string): Promise<Empresa[]> {
        return this.empresaService.listar(nome);
    }

    @Get(':id')
    recuperar(@Param('id') id: string): Promise<Empresa> {
        return this.empresaService.recuperar(id);
    }

    @Delete(':id')
    remover(@Param('id') id: string): Promise<void> {
        return this.empresaService.remover(id);
    }
}