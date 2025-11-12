import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Convite } from './convite.entity';


@Injectable()
export class ConviteService {
    constructor(
        @InjectRepository(Convite)
        private MembroRepository: Repository<Convite>,
    ) { }

    async criar(convite: Partial<Convite>): Promise<Convite> {
        return this.MembroRepository.save(convite);
    }

    async listar(nome: string = ''): Promise<Convite[]> {
        const queryBuilder = this.MembroRepository.createQueryBuilder('convite');
        if (nome) {
            queryBuilder.andWhere('convite.token LIKE :nome', { nome: `%${nome}%` });
        }
        return queryBuilder.getMany();
    }

    async recuperar(id: string): Promise<Convite> {
        return this.MembroRepository.findOneBy({ id: id as any });
    }

    async atualizar(id: string, membro: Partial<Convite>): Promise<Convite> {
        membro.atualizacao = new Date();
        await this.MembroRepository.update(id, membro);
        return this.MembroRepository.findOne({ where: { id: id as any } });
    }

    async remover(id: string): Promise<void> {
        await this.MembroRepository.delete(id);
    }

}
