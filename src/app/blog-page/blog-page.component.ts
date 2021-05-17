import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent implements OnInit {

  inputPhone = '380XXXXXXXXX';

  constructor(private title: Title) {
    this.title.setTitle('Blog')
  }

  ngOnInit(): void {
  }

  onInput(event?: { target: { value: string; }; }): any {
    this.inputPhone = event.target.value;
    event.target.value = '';
  }

}
