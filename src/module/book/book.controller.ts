import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findByID(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findByID(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: BookDTO) {
    return this.bookService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.delete(id)
  }
}
