import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-details-card',
  templateUrl: './home-details-card.component.html',
  styleUrls: ['./home-details-card.component.css']
})
export class HomeDetailsCardComponent {
  @Input() link!: String;

}
