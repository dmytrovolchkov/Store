import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent implements OnInit {

  inputPhone = '380XXXXXXXXX';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event?): any {
    this.inputPhone = event.target.value;
    event.target.value = '';
  }

}
