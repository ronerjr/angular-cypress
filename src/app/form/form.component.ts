import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  adminForm: FormGroup;
  availableStatus: Array<any>;
  teams: Array<number>;
  project: {};

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.project = new Object();
    this.teams = [
      1, 2, 3, 4
    ];

    this.adminForm = this.fb.group({
      team: ['', Validators.required],
      activity: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.availableStatus = [
      { value: 'green', viewValue: 'Green' },
      { value: 'yellow', viewValue: 'Yellow' },
      { value: 'red', viewValue: 'Red' }
    ];
  }

  save(project) {
    this.snackBar.open('Item successfully saved!!!', null, {
      duration: 2000,
    });
    this.router.navigate(['result']);
  }

  cancel(project) {
    this.adminForm.reset();
  }

}
