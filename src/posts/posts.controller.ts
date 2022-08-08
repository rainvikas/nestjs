import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('posts')
export class PostsController {

    @Get("post-list")
    postList(){
        return "post list"
    }

    @Post("post-add")
    postAdd(){
        return "post add"
    }

}
