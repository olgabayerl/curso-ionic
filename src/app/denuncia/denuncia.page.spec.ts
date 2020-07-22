import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { denunciaPage } from './denuncia.page';

describe('denunciaPage', () => {
  let component: denunciaPage;
  let fixture: ComponentFixture<denunciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [denunciaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(denunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
