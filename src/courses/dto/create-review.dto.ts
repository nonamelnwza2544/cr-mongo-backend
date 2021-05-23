import { IsInt, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { ObjectID, ObjectId } from "mongodb";

export class CreateReviewDto {
    @IsNotEmpty()
    comments: string;
    @IsInt()
    score: number;

    courseId?: ObjectID;  
    
    
  
}