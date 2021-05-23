import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import {CreatCourseDto} from './dto/create-course.dto'
import { Review } from './entities/review.entity';
import { ObjectID } from 'mongodb';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class CourseService {
    courseService: any;
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>
    ) {}

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async create(createCourseDto: CreatCourseDto) {
        return this.courseRepository.save(createCourseDto);
      }
    
      async findAllReview(courseId: ObjectID) {
          return this.reviewRepository.find({where: { courseId: courseId}});
      }

      async createReview(createReview: CreateReviewDto) {
          return this.reviewRepository.save(createReview);
      }
}
