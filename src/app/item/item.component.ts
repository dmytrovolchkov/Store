import { Review, ReviewService } from './../services/reviews.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Paint, ItemListService } from '../services/item-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Paint;
  rev: Review[];


  constructor(private route: ActivatedRoute,
    private items: ItemListService,
    private review: ReviewService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.rev = this.review.getByIdRev(+params.id)
      this.item = this.items.getById(+params.id)
      console.log('Params', this.item)
      console.log('Params2', this.rev)
    })
  }
}
