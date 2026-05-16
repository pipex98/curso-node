export interface CreateTableUseCase {
  execute:( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
  base: number
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {

  constructor(
    /**
     * DI
     */
  ) { }

  execute({ base, limit = 10 }: CreateTableOptions) {

    let output = '';

    for (let i = 1; i <= limit; i++) {
      output += `${base} * ${i} = ${base * i}`;

      if ( i < limit ) output += '\n';
    };

    return output;
  }

};