import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { StorageService } from 'src/app/services/storage.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  lessons: Lesson[] = []
  subject: string = ''

  constructor(private storageService: StorageService, private subjectService:SubjectsService, private route: ActivatedRoute) {}

  ngOnInit() { 
    this.storageService.updateData(this.route)

    this.route.params.subscribe(params => { 
      const subject = params['subject']
      this.lessons = this.subjectService.getLessons(subject)
    })

  }

}
