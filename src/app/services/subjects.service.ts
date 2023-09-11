import { Injectable } from '@angular/core';
import { SubjectsData } from '../models/subjectData';
import { StorageService } from './storage.service';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subjects: SubjectsData[] = [ 
    {year: 1, sem: 1, subjects: [
      {subject : 'MC', lessons: [
        {name: 'Functions', link: 'functions'}, 
        {name: 'Counting', link: 'counting'}, 
        {name: 'Integration', link: 'integration'}, 
        {name: 'Differentiation', link: 'differentiation'}, 
      ]},
      {subject : 'IP', lessons: [
      ]},
      {subject : 'ICS', lessons: [
      ]},
      {subject : 'CS', lessons: [
        {name: 'Email', link: 'email'}, 
        {name: 'Memo', link: 'memo'}, 
        {name: 'Non Discriminatory', link: 'non-discriminatory'}, 
      ]},
    ]}
    
  ] 
  constructor(private storageService: StorageService) {
   }

  getAllData() { 
    let subjects = this.getAllSubjects()
    let lessons = this.getAllLessonsLink() 
    
    return [...subjects, ...lessons]
  }

  getSubjects() { 
    let subjects: string[] = []
    if (this.storageService.year > 0 && this.storageService.sem > 0) {
      for (const s of this.subjects) { 
        if (s.year == this.storageService.year && s.sem == this.storageService.sem) { 
          subjects = s.subjects.map(i => i.subject)
        }
      }
    }
    return subjects
  }

  getAllSubjects() { 
    let subjects: {name: string, link: string}[] = [] 

    for (let subject of this.subjects) { 
      for (let s of subject.subjects) { 
        subjects.push({name: s.subject, link:'year-' + subject.year + '/' + 'sem-' + subject.sem + '/' + s.subject})
      }
    }

    return subjects
  }

  getLessons(subjectName: string) { 
    let lesson :Lesson[] = [];

    this.subjects.map(sub => {
      sub.subjects.map(subject => {
        subject.subject === subjectName? lesson = subject.lessons : null
      })
    })
    lesson = lesson ? lesson : []

    return lesson
  }

  getAllLessonsLink() { 
    let lessons: {name: string, link: string}[] = []

    this.subjects.map(sub => { 
      sub.subjects.map(subject => {
        subject.lessons.map(lesson => {
          lessons.push({name: subject.subject + ' - ' + lesson.name, link:'year-' + sub.year + '/' + 'sem-' + sub.sem + '/' + subject.subject + '/' + lesson.link})
        })
      })
    })

    return lessons
  }
}
