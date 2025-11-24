import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlat } from './detail-plat';

describe('DetailPlat', () => {
  let component: DetailPlat;
  let fixture: ComponentFixture<DetailPlat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPlat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
