import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../UserData";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ROLES } from "../roles";
import { DataService } from "../data.service";

@Component({
  selector: "app-create-dialog",
  templateUrl: "./create-dialog.component.html",
  styleUrls: ["./create-dialog.component.css"]
})
export class CreateDialogComponent implements OnInit {
  USER_ROLES = ROLES;
  user: User = {
    id: null,
    userName: "",
    name: "",
    surname: "",
    email: "",
    role: "",
    registrationDate: ""
  };
  userForm: FormGroup;

  constructor(
    private dialofRef: MatDialogRef<CreateDialogComponent>,
    private fb: FormBuilder,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.user.id = data.maxId + 1;
    this.user.registrationDate = new Date().toISOString();
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ["", [Validators.required, Validators.minLength(3)]],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      role: ["", Validators.required],
      registrationDate: [this.user.registrationDate, Validators.required]
    });
  }

  cancel() {
    this.dialofRef.close();
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    } else {
      this.dataService.addUser(this.user).subscribe();
      this.dialofRef.close();
    }
  }

  get userControls() {
    return this.userForm.controls;
  }

  getErrorMessage(type) {
    console.log(this.user);
    if (this.userControls[type].hasError("required")) return "Can't be empty";
    else if (this.userControls[type].hasError("minlength"))
      return "To short...";
    else if (this.userControls[type].hasError("email")) return "Invalid email";
    else return;
  }
}
