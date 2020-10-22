import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaDenunciasPage } from './lista-denuncias.page';

describe('ListaDenunciasPage', () => {
  let component: ListaDenunciasPage;
  let fixture: ComponentFixture<ListaDenunciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDenunciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDenunciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
