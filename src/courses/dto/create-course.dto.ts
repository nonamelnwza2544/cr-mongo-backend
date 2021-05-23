import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreatCourseDto {
    @IsNumberString()
    number: string;
    
    @IsNotEmpty()
    title: string;
    
}
