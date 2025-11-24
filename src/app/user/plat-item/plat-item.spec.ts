import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatItem } from './plat-item';

describe('PlatItem', () => {
  let component: PlatItem;
  let fixture: ComponentFixture<PlatItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
