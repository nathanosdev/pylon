import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTabsComponent } from './layout-tabs.component';

describe('LayoutTabsComponent', () => {
  let component: LayoutTabsComponent;
  let fixture: ComponentFixture<LayoutTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
