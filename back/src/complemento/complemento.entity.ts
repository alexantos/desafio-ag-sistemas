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

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    criacao: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    atualizacao: Date;
}