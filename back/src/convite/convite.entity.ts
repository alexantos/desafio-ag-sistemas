import { Membro } from 'src/membro/membro.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Convite {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    // @Column()
    // token: string;
    
    @OneToOne(() => Membro, membro => membro.convite)
    @JoinColumn()
    membro: Membro;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    criacao: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    atualizacao: Date;
}