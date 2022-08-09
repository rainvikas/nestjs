import { Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('posts')
export class PostsController {

    @Get("post-list")
    postList(){
        return "post list"
    }

    @Get("post-add")
    postAdd(){
        return "post add"
    }

    @Get("detail")
    postDetails(){
        return "post detail"
    }

    @Post("lists/:id")
    detailById(@Param("id") id: number):string {
        console.log(id, '===')
        return "list user"+id
    }


}
