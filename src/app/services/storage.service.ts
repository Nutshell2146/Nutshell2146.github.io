import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  year: number = 0;
  sem: number = 0;
  subject: string = '';

  constructor() { }

  ngOnInit() { 
  }

  updateData(route: ActivatedRoute) { 
    route.params.subscribe(params => { 
      this.year = params['year'] && params['year'].slice(-1) > 0 ? params['year'].slice(-1) : 0; 
      this.sem = params['sem'] && params['sem'].slice(-1) > 0 ? params['sem'].slice(-1) : 0; 
      this.subject = params['subject'] ? params['subject'] : ''; 
    })
  }

}
