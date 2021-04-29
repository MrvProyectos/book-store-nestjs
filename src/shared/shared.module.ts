import { Module } from '@nestjs/common';

@Module({
  providers: [],
  exports: [], // para poder usarlo desde otro lugar
})
export class SharedModule {}