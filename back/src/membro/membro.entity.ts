import { Complemento } from 'src/complemento/complemento.entity';
import { Convite } from 'src/convite/convite.entity';
import { Empresa } from 'src/empresa/empresa.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

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

    @Column({ default: false })
    admin: boolean;

    @ManyToOne(() => Empresa, empresa => empresa.membro, { nullable: true })
    @JoinColumn()
    empresa: Empresa;

    @OneToOne(() => Complemento, complemento => complemento.membro, { nullable: true })
    @JoinColumn()
    complemento: Complemento;

    @OneToOne(() => Convite, convite => convite.membro, { nullable: true })
    @JoinColumn()
    convite: Convite;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    criacao: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    atualizacao: Date;

}