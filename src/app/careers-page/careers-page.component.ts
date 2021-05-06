import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
