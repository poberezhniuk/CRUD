import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../data.service";
import { DeleteDialogComponent } from "../delete-dialog/delete-dialog.component";

import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { EditDialogComponent } from "../edit-dialog/edit-dialog.component";
import { CreateDialogComponent } from "../create-dialog/create-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataSource;
  columnsToDisplay = [
    "id",
    "userName",
    "name",
    "surname",
    "email",
    "role",
    "registrationDate",
    "enabled",
    "actions"
  ];

  constructor(private data: DataService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource([]);
  }

  getUsers() {
    this.data.getUsers().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDeleteDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    const { name, surname, userName } = this.dataSource.data.find(
      user => user.id === id
    );

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id,
      description: `Really, you want to delete "${name} ${surname}(${userName})"?`
    };

    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }

  openEditDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    const user = this.dataSource.data.find(user => user.id === id);

    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "400px";
    dialogConfig.data = {
      user: user
    };

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "400px";
    dialogConfig.data = {
      maxId: this.dataSource.data.reduce((acc, user) => {
        return Math.max(acc, user.id);
      }, 0)
    };

    const dialogRef = this.dialog.open(CreateDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.getUsers());
  }
}
