import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Membro {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    motivacao: string;

    @Column()
    admin: boolean;

    // @OneToOne(() => Empresa, empresa => empresa.membro)
    // @JoinColumn()
    // empresa: Empresa;

    @Column()
    criacao: Date;

    @Column()
    atualizacao: Date;
}