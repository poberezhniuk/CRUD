import { Component, Inject, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { DataService } from "../data.service";

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.css"]
})
export class DeleteDialogComponent {
  description: string;
  id: number;

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    const { id, description } = data;

    this.description = description;
    this.id = id;
  }

  approve() {
    this.dataService.deleteUser(this.id).subscribe();
    this.dialogRef.close();
  }

  decline() {
    this.dialogRef.close();
  }
}
