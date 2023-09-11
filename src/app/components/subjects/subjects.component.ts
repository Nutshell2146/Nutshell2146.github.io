import { Component } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent {
  subjects: string[] = [];

  constructor(private route:ActivatedRoute, private subjectsService: SubjectsService, private storageService: StorageService) {}

  ngOnInit() { 
    this.storageService.updateData(this.route)
    this.subjects = this.subjectsService.getSubjects()
  }
}
