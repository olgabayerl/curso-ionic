import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CepPage } from './cep.page';

describe('Tab1Page', () => {
  let component: CepPage;
  let fixture: ComponentFixture<CepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CepPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
