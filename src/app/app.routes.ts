import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorporaComponent } from './corpora/corpora.component';

export const routes: Routes = [
    { path: '',                                  component: HomeComponent },
    { path: 'corpora',                        component: CorporaComponent },
]


