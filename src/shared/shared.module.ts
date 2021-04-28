import { Module } from '@nestjs/common';
import { MapperService } from './mapper.service';

@Module({
  providers: [MapperService],
  exports: [MapperService], // para poder usarlo desde otro lugar
})
export class SharedModule {}