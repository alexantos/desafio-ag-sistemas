import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complemento } from './complemento.entity';
import { ComplementoController } from './complemento.controller';
import { ComplementoService } from './complemento.service';



@Module({
    imports: [TypeOrmModule.forFeature([Complemento])],
    providers: [ComplementoService],
    controllers: [ComplementoController],
})
export class ComplementoModule { }
