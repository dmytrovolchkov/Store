import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersPageComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Careers')
  }

  ngOnInit(): void {
  }

}
