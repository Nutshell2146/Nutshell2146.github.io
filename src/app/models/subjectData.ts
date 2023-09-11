export interface SubjectsData { 
    year: number; 
    sem: number
    subjects: { 
        subject: string;
        lessons: { 
            name: string;
            link: string;
        }[]
    }[]
}
