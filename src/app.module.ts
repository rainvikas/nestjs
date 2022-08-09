import { Module,NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { PostsController } from './posts/posts.controller';
import { AuthMiddleware } from './middleware/auth';

import { AuthMiddleware2 } from './middleware/auth2';


@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, BlogsService],
})

 export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware,AuthMiddleware2)
  //   .exclude({
  //     path:"posts/post-list",method:RequestMethod.GET
  //   })
  //   .forRoutes("posts")
  // }
}
