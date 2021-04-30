import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tags = ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes',
  'Chilli peppers', 'Broccoli', 'Watermelons', 'Oranges', 'Babanas', 'Grapes',
  'Cherries', 'Meat', 'Seo tag', 'Fish', 'Seo tag', 'Fresh food', 'Lemons'];

}
