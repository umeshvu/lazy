import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentModule } from './modules/student/student.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => StudentModule
      // Commenting the lazy module part
      // import('./modules/student/student.module').then((m) => m.StudentModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
