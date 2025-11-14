import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convite } from './convite.entity';
import { ConviteService } from './convite.service';
import { ConviteController } from './convite.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Convite])],
    providers: [ConviteService],
    controllers: [ConviteController],
})
export class ConviteModule { }
