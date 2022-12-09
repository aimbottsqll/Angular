import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Compage3Component } from './Compage3.component'

  describe('Compage1Component', () => {
    let component: Compage3Component;
    let fixture: ComponentFixture<Compage3Component>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Compage3Component ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(Compage3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });