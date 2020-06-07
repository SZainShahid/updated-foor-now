import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuregisterComponent } from './menuregister.component';

describe('MenuregisterComponent', () => {
  let component: MenuregisterComponent;
  let fixture: ComponentFixture<MenuregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
