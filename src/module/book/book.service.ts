import { ConflictException, Injectable } from '@nestjs/common';
import { BookDTO } from './dto/book.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BookService {
  
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findByID(id: number) {
    const obj = await this.prisma.book.findFirst({where: {id}})

    if(!obj) {
      throw new ConflictException("Livro não encontrado!")
    }
    
    return this.prisma.book.findUnique({where: {id}})
  }

  async create(data: BookDTO) {
    const bookExists = await this.prisma.book.findFirst({where: {description: data.description}})

    if(bookExists) {
      throw new ConflictException("Livro já cadastrado!")
    }

    const book = this.prisma.book.create({data});

    return book;
  }

  async update(id: number, data: BookDTO) {
    return await this.prisma.book.update({
      data,
      where: {id}
    })
  }

  async delete(id: number) {
    const obj = await this.prisma.book.findFirst({where: {id}})

    if(!obj) {
      throw new ConflictException("Livro inexistente!")
    } 
    
    return this.prisma.book.delete({where: {id}})
  }
}
