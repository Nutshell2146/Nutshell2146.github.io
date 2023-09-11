import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private storageService: StorageService, private route: ActivatedRoute) {}

  ngOnInit() { 
    this.storageService.updateData(this.route)
  }

}
