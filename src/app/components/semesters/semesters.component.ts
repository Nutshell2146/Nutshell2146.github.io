import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent {
  constructor(private storageService: StorageService, private route:ActivatedRoute) {}

  ngOnInit() { 
    this.storageService.updateData(this.route)
  }
}
