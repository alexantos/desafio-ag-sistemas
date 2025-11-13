import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membro } from './membro.entity';


@Injectable()
export class MembroService {
    constructor(
        @InjectRepository(Membro)
        private membroRepository: Repository<Membro>,
    ) { }

    async criar(membro: Partial<Membro>): Promise<Membro> {
        membro.aprovado = false;
        return this.membroRepository.save(membro);
    }

    async listar(nome: string = ''): Promise<Membro[]> {
        const queryBuilder = this.membroRepository.createQueryBuilder('membro');
        if (nome) {
            queryBuilder.andWhere('membro.nome LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Membro> {
        return this.membroRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, membro: Partial<Membro>): Promise<Membro> {
        membro.atualizacao = new Date();
        await this.membroRepository.update(id, membro);
        return this.membroRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.membroRepository.delete(id);
    }

}
