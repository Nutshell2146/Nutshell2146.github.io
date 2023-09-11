import { Injectable } from '@angular/core';
import { Lessons } from '../models/lessons';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lessons[] = [
    {subject: 'MC', lessons: [
      {name: 'Functions', link: 'functions'},
      {name: 'Matrix', link: 'matrix'}

    ]},
    {subject: 'IP', lessons: [
      {name: 'Functions', link: 'functions'}
    ]},
    
  ]

  constructor() { }

  getLessons(subject: string) { 
    let lesson;

    lesson = this.lessons.find(lesson => lesson.subject == subject)?.lessons
    lesson = lesson ? lesson : []

    return lesson
  }
  
  getAllLessons() { 
    let lessons: Lesson[] = []; 

    for (let lesson of this.lessons) { 
      for (let l of lesson.lessons) { 

      }
    }

    return lessons
  }
}
