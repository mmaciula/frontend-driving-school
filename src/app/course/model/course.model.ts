export interface CourseDTO {
    id: number;
    name: string;
    description: string;
    cost: number;
    startDate: Date;
    instructorUsername: string;
    instructorName: string;
    members: number;
}
