import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentImage: String = '';
  contentTitle: String = '';
  contentDescription: String = '';
  private id:String | null = '';

  constructor(
    private route: ActivatedRoute
    ){}
  ngOnInit(): void {
      this.route.paramMap.subscribe(value =>
        this.id = value.get('id'))
      this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:String | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentImage = result.image
  }
}
