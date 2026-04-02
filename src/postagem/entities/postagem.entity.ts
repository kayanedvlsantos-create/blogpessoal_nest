import { IsNotEmpty, isNotEmpty, length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagem"}) // Cria uma tabela chamada tb_postagem
export class Postagem{

    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto incrementa
    id: number;

    @IsNotEmpty() // Verifica se o campo está vazio
    @Column({ length: 100, nullable: false }) // Cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // Cria uma coluna chamada data atualizaçao da postagem
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

}