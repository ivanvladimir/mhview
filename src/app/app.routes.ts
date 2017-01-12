import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { CorporaComponent } from './corpora/corpora.component';

export const routes: Routes = [
    { path: '',                                  component: HomeComponent },
    { path: 'corpora',                        component: CorporaComponent },
    { path: 'topics/:id',                     component:  TopicsComponent },
]


