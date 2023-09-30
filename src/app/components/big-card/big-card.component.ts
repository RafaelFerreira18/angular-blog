import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  imageSrc:String = '';
  @Input()
  bigCardTitle:String = '';
  @Input()
  bigCardDescription: String = '';
  @Input()
  id:String = '';
}
