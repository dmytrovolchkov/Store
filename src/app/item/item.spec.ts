import { FormGroup } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { ItemComponent } from './item.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([]),
        HttpClientModule
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of ({id: 1})
          }
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
