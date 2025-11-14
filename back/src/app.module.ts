import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembroModule } from './membro/membro.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ComplementoModule } from './complemento/complemento.module';
import { ConviteModule } from './convite/convite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MembroModule,
    EmpresaModule,
    ComplementoModule,
    ConviteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
