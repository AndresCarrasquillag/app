/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DinosauriosListComponent } from './dinosaurios-list.component';

describe('DinosauriosListComponent', () => {
  let component: DinosauriosListComponent;
  let fixture: ComponentFixture<DinosauriosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosauriosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosauriosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
