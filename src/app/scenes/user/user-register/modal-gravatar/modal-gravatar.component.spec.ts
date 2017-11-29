import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGravatarComponent } from './modal-gravatar.component';

describe('ModalGravatarComponent', () => {
  let component: ModalGravatarComponent;
  let fixture: ComponentFixture<ModalGravatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGravatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGravatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
