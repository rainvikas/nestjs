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
    
    @Post("add-user")
    addUser(@Body() record:any):string{
        console.log(record,"===")
        return "OK ADD USER"
    }

    @Get("list/:id")
    listUser(@Param() record:any):string{
        console.log(record,"===")
        return "List user"+record.id
    }
}
