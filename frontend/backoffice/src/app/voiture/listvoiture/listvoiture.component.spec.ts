import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoitureComponent } from './listvoiture.component';

describe('ListvoitureComponent', () => {
  let component: ListvoitureComponent;
  let fixture: ComponentFixture<ListvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
