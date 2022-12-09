import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Compage2Component } from './Compage2.component'

  describe('Compage2Component', () => {
    let component: Compage2Component;
    let fixture: ComponentFixture<Compage2Component>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Compage2Component ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(Compage2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });