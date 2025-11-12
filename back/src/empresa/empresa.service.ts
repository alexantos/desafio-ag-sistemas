import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';


@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private EmpresaRepository: Repository<Empresa>,
    ) { }

    async criar(empresa: Partial<Empresa>): Promise<Empresa> {
        return this.EmpresaRepository.save(empresa);
    }

    async listar(nome: string = ''): Promise<Empresa[]> {
        const queryBuilder = this.EmpresaRepository.createQueryBuilder('empresa');
        if (nome) {
            queryBuilder.andWhere('empresa.nome LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Empresa> {
        return this.EmpresaRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, empresa: Partial<Empresa>): Promise<Empresa> {
        empresa.atualizacao = new Date();
        await this.EmpresaRepository.update(id, empresa);
        return this.EmpresaRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.EmpresaRepository.delete(id);
    }

}
