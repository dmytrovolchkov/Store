import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryPageComponent } from './category-page.component';
import { NgxsModule } from '@ngxs/store';
import { of } from 'rxjs';

describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPageComponent ],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([]),
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
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
