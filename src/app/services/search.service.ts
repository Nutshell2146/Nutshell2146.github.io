import { Injectable } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { SearchItem } from '../models/searchItem';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data: {name: string, link: string}[] = []

  constructor(private subjectService: SubjectsService) {
    this.data = this.subjectService.getAllData()
  }

  filter(text: string) {
    let filteredList: SearchItem[] = []

    filteredList = this.data.filter(item => item.name.toLowerCase().includes(text.trim().toLowerCase()))

    return filteredList
  }
}
