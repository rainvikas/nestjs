import { Body,Controller,Get, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    userInfo():string{
        return "USER PAGE"
    }

    @Get("history-page")
    userHistory():object {
        return {id:1,text:"KJHJKHJKHJKH"};
    }
}
