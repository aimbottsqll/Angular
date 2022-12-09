import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Compage1Component } from './Compage1.component';

  describe('Compage1Component', () => {
    let component: Compage1Component;
    let fixture: ComponentFixture<Compage1Component>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Compage1Component ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(Compage1Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });