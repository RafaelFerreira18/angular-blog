import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  smallCardImage:String = '';
  @Input()
  smallCardTitle: String = '';
  @Input()
  id: String = '';

  constructor(){}
}
