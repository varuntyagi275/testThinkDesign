import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  timeLeft: number = 10;
  interval: any;
  sentFlag: any
  flag = true;

  emailForm: FormGroup
  constructor(private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {

    this.emailForm = new FormGroup({
      receivermail: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }

  submit() {
    console.log(this.emailForm.status);
    console.log(this.emailForm.value);
    this.SpinnerService.show();
    this.setTime();

  }

  reset() {
    this.flag = true;
    this.emailForm.reset();
  }

  setTime() {
    this.interval = setTimeout(() => { this.sent() }, 1500)
  }

  sent() {
    this.SpinnerService.hide();
    this.flag = false
    this.sentFlagMethod();
  }

  sentFlagMethod() {
    this.sentFlag = setTimeout(() => { this.reset() }, 3000)
  }


  //Method To get FormControl
  public get receivermail(): any {
    return this.emailForm.get('receivermail');
  }


  public get subject(): any {
    return this.emailForm.get('subject');
  }


  public get message(): any {
    return this.emailForm.get('message');
  }

}
