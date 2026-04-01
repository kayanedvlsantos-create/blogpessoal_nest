import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { postagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { postagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // Importa o Postagem como uma entidade do TypeOrmModule
    providers: [postagemService], // Define o PostagemService como um provedor
    controllers: [postagemController],
    exports: [TypeOrmModule] // Exporta o TypeOrmModule
})
export class PostagemModule {}
