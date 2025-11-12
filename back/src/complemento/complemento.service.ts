import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complemento } from './complemento.entity';


@Injectable()
export class ComplementoService {
    constructor(
        @InjectRepository(Complemento)
        private complementoMembroRepository: Repository<Complemento>,
    ) { }

    async criar(complemento: Partial<Complemento>): Promise<Complemento> {
        return this.complementoMembroRepository.save(complemento);
    }

    async listar(nome: string = ''): Promise<Complemento[]> {
        const queryBuilder = this.complementoMembroRepository.createQueryBuilder('complemento');
        if (nome) {
            queryBuilder.andWhere('complemento.nome LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Complemento> {
        return this.complementoMembroRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, complemento: Partial<Complemento>): Promise<Complemento> {
        complemento.atualizacao = new Date();
        await this.complementoMembroRepository.update(id, complemento);
        return this.complementoMembroRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.complementoMembroRepository.delete(id);
    }

}
