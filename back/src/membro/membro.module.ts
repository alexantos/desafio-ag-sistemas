import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membro } from './membro.entity';
import { MembroService } from './membro.service';
import { MembroController } from './membro.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Membro])],
    providers: [MembroService],
    controllers: [MembroController],
})
export class MembroModule { }
