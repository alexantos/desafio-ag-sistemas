import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membro } from './membro.entity';


@Injectable()
export class MembroService {
    constructor(
        @InjectRepository(Membro)
        private MembroRepository: Repository<Membro>,
    ) { }

    async criar(membro: Partial<Membro>): Promise<Membro> {
        return this.MembroRepository.save(membro);
    }

    async listar(nome: string = ''): Promise<Membro[]> {
        const queryBuilder = this.MembroRepository.createQueryBuilder('membro');
        if (nome) {
            queryBuilder.andWhere('membro.nome LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Membro> {
        return this.MembroRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, membro: Partial<Membro>): Promise<Membro> {
        membro.atualizacao = new Date();
        await this.MembroRepository.update(id, membro);
        return this.MembroRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.MembroRepository.delete(id);
    }

}
