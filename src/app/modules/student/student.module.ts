import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { BiodataComponent } from './biodata/biodata.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DetailsComponent },
];

@NgModule({
  declarations: [DetailsComponent, BiodataComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StudentModule {}
