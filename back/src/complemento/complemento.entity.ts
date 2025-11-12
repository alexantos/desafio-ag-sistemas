import { Membro } from 'src/membro/membro.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Complemento {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @OneToOne(() => Membro, membro => membro.complemento)
    @JoinColumn()
    membro: Membro;

    @Column()
    criacao: Date = new Date();

    @Column()
    atualizacao: Date = new Date();
}