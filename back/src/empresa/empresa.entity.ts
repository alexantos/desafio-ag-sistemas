import { Membro } from 'src/membro/membro.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nome: string;

    @Column()
    razao_social: string;

    @OneToMany(() => Membro, membro => membro.empresa)
    @JoinColumn()
    membro: Membro;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    criacao: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    atualizacao: Date;
}