import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDayComponent } from './pokemon-day.component';

xdescribe('PokemonDayComponent', () => {
  let component: PokemonDayComponent;
  let fixture: ComponentFixture<PokemonDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
