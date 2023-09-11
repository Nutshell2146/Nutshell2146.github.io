import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchItem } from 'src/app/models/searchItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('filter') filter!: ElementRef<HTMLInputElement>
  filteredList: SearchItem[] = []

  constructor(public storageService: StorageService, private searchService: SearchService) {}


  ngOnInit() { 
    
  }

  onSearchInput(text: string) { 
    let filteredList: SearchItem[]  = []

    if (!text) { 
      filteredList = []
    }

    if (text === '') { 
      this.filteredList = []
      return
    }

    filteredList = this.searchService.filter(text)



    this.filteredList = filteredList
  }

  openMobileSearch() { 
    const mobileSearch: HTMLElement | null = document.querySelector('.mobile-search')

    if (mobileSearch) {
      mobileSearch.style.display = 'block'
    }
  }

  closeMobileSearch() { 
    const mobileSearch: HTMLElement | null = document.querySelector('.mobile-search')
    if (mobileSearch) {
      mobileSearch.style.display = 'none'
    }

  }

  clearInput() { 
    this.filter.nativeElement.value = ''
    this.filteredList = []
  }
}
