import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

import { BlogsService } from 'src/blogs/blogs.service';
@Controller('users')
export class UsersController {
  constructor(private blogService: BlogsService) {}

  @Get()
  userInfo(): string {
    return 'USER PAGE';
  }

  @Get('history-page')
  userHistory(): object {
    return { id: 1, text: 'KJHJKHJKHJKH' };
  }

  @Post('add-user')
  addUser(@Body() record: any): string {
    // console.log(record,"===")
    return 'OK ADD USER';
  }

  @Get('list/:id')
  // @HttpCode(204)
  listUser(@Param() record: any): string {
    // console.log(record,"===")
    return 'List user' + record.id;
  }

  @Get('list')
  // @HttpCode(204)
  listFilterUser(@Query() record: any): string {
    console.log(record, '===');
    return 'List Query user' + record.id;
  }

  @Get('version*card')
  detailPage(): string {
    return 'detail';
  }

  detailPages(): string {
    return 'Default';
  }

  @Get('blog-list')
  async blogList(): Promise<any[]> {
    return this.blogService.finddata();
  }

  @Post('blog-add')
  blogList1(@Body() record: any) {
    return this.blogService.create(record);
  }
}
