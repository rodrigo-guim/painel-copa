import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayDialogComponent } from './replay-dialog.component';

describe('ReplayDialogComponent', () => {
  let component: ReplayDialogComponent;
  let fixture: ComponentFixture<ReplayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
