import {Component, Input, OnInit} from '@angular/core';
import {Paint} from '../app.component';


@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {

  @Input() paint: Paint;

  constructor() { }

  ngOnInit(): void {
  }

}
