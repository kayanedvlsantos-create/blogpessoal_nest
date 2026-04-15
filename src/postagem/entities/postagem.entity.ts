import { IsNotEmpty, isNotEmpty, length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagem"}) // Cria uma tabela chamada tb_postagem
export class Postagem{

    @ApiProperty()
    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto incrementa
    id!: number;

    @ApiProperty()
    @IsNotEmpty() // Verifica se o campo está vazio
    @Column({ length: 100, nullable: false }) // Cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
    titulo!: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto!: string;

    @ApiProperty()
    @UpdateDateColumn() // Cria uma coluna chamada data atualizaçao da postagem
    data!   : Date;

    @ApiProperty({ type: () => Tema })
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema!: Tema

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE"
})
usuario!: Usuario
 

}