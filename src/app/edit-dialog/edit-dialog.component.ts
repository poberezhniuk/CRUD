import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { ROLES } from "../roles";
import { DataService } from "../data.service";
import { User } from "../UserData";

@Component({
  selector: "app-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.css"]
})
export class EditDialogComponent implements OnInit {
  user: User;
  USER_ROLES = ROLES;
  editForm: FormGroup;


  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.user = { ...data.user };
  }

  ngOnInit() {
    console.log(this.user);
    this.editForm = this.fb.group({
      userName: [
        this.user.userName,
        [Validators.required, Validators.minLength(3)]
      ],
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      role: [this.user.role, Validators.required],
      registrationDate: [this.user.registrationDate, Validators.required]
    });
  }

  get userControls() {
    return this.editForm.controls;
  }

  onSubmit() {
    if (this.editForm.invalid) {
      return;
    } else {
      console.log(this.user);
      this.dataService.updateUser(this.user).subscribe();
      this.dialogRef.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  getErrorMessage(type) {
    if (this.userControls[type].hasError("required")) return "Can't be empty";
    else if (this.userControls[type].hasError("minlength"))
      return "To short...";
    else if (this.userControls[type].hasError("email")) return "Invalid email";
    else "";
  }
}
