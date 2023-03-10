import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ModifyUser} from "../../interface/modify-user";
import {Router} from "@angular/router";
import {EditableFieldComponent} from "../../components/editable-field/editable-field.component";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{
  myProfil: any;
  error: any;
  editSelected: string | null = "";
  buttonModify: boolean = true;
  myNewProfileNull: ModifyUser= {
    id: null,
    pseudo: null,
    email: null,
    lastname: null,
    firstname: null,
    avatar: null,
    birthdate: null,
    phone: null,
    street: null,
    city: null,
    country: null,
    zip: null,
    password: null,
  };
  myNewProfile: ModifyUser = this.myNewProfileNull;
  errorSave: any;

  constructor(
    private userService:UserService
  ) {}

  @ViewChildren(EditableFieldComponent) enfants: QueryList<EditableFieldComponent> | undefined;

  ngOnInit() {
    this.editSelected = "";
    this.buttonModify = true;
    this.myNewProfile = this.myNewProfileNull
    if (this.enfants){
      this.enfants.forEach(enfant => {
        enfant.ngOnInit();
      });
    }
    this.getMyProfile();
  }

  saveModifyProfile() {
    this.userService.modifyProfile(this.myNewProfile).subscribe(
      {
        next: (value: any) => {
          this.ngOnInit();
        },
        error: (error: any) => this.errorSave = error,
        complete: () => console.log("fini")});
  }

  getMyProfile() {
    this.userService.myProfile().subscribe(
      {
        next: (value: any) => {
          this.myProfil = value
          this.myProfil.password = "Mot de passe actuel"
        },
        error: (error: any) => this.error = error,
        complete: () => console.log("fini")});
  }

  editMode(field: string | null) {
    this.editSelected = field;
  }

  deleteField(field: string){
    switch (field) {
      case 'avatar':
        this.myNewProfile.avatar = null;
        break;
    }
    this.objectValuesNotNull();
  }

  objectValuesNotNull() {
    this.buttonModify = Object.values(this.myNewProfile).every(val => val === null);
  }

  newFieldProfile($event: any) {
    this.myNewProfile = { ...this.myNewProfile, ...$event };
    this.objectValuesNotNull();
  }

  onAvatarSelect($event: string) {
    const avatar = { avatar : $event}
    this.myNewProfile = { ...this.myNewProfile, ...avatar };
    this.editSelected = null;
    this.objectValuesNotNull();
  }
}
