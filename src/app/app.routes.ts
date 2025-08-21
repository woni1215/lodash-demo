import { Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { LangComponent } from './lang/lang.component';
import { NumberComponent } from './number/number.component';
import { StringComponent } from './string/string.component';

export const routes: Routes = [
  { path: '', redirectTo: 'collection', pathMatch: 'full' },
  { path: 'collection', component: CollectionComponent },
  { path: 'lang', component: LangComponent },
  { path: 'number', component: NumberComponent },
  { path: 'string', component: StringComponent },
];
