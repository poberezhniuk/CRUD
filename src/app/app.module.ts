import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserDataService } from "./user-data.service";
import {
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

const modules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  InMemoryWebApiModule.forRoot(UserDataService),
  BrowserAnimationsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatButtonModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [AppComponent, DeleteDialogComponent, EditDialogComponent, CreateDialogComponent],
  imports: [...modules],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent, EditDialogComponent, CreateDialogComponent]
})
export class AppModule {}
