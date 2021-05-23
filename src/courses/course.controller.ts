import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ObjectId, ObjectID } from 'mongodb';
import { CreateDateColumn } from 'typeorm';
import { CourseService } from './course.service';
import {CreatCourseDto} from './dto/create-course.dto'
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    async findAll() {
        return this.courseService.findAll();
    }

    @Post()
  async create(@Body() createCourseDto: CreatCourseDto) {
      
    return this.courseService.create(createCourseDto);
  }

  @Get(':courseId/review')
  async findAllReview(@Param('courseId') courseId: ObjectID) {
    

    
  return this.courseService.findAllReview(courseId);
  }
@Post(':courseId/review')
async createReview(@Param('courseId')courseId: ObjectID, @Body() createReviewDto: CreateReviewDto,) {
 createReviewDto.courseId= courseId

    return this.courseService.createReview(createReviewDto);
}
    


}
