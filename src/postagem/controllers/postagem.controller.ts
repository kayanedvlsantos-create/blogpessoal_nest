import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { postagemService } from "../services/postagem.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("/postagens")
export class postagemController {
    constructor(private readonly postagemService: postagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
    }

    @Get('/:id')
    findById(@Param('id' , ParseIntPipe) id: number){
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id' , ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }


 }