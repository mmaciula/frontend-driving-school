import { CourseDTO } from './course.model';

export interface UserDTO {
    username: string;
    name: string;
    surname: string;
    email: string;
    roles: string[];
    courses: CourseDTO[];
}
