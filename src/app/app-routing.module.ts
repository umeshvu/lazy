import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  { path: '', component: TeacherComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
