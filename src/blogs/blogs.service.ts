import { Injectable } from '@nestjs/common';

// interface Blog{
//     name:string,
//     id:number
// }


@Injectable()
export class BlogsService {
    private readonly blogs:any[]=[];

    create(data:any){
        this.blogs.push(data);
    }

    

    finddata():any[]{
    return this.blogs
    }
}
