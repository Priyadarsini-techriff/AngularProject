import { Component } from '@angular/core';

@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrls: ['./two-factor-authentication.component.css']
})
export class TwoFactorAuthenticationComponent {
  public configOptions = {
    length: 4
  }
  otp!: string;
  inputDigitLeft:string="Verify Code";
  btnStatus:string="btn-light";
  constructor() { }

  ngOnInit(): void {
  }

  onOtpChange(event: any) {
    this.otp = event;
    if (this.otp.length < this.configOptions.length) {
      this.inputDigitLeft=this.configOptions.length-this.otp.length + " digits left"
    }
    if(this.otp.length==this.configOptions.length){
      this.inputDigitLeft="Let's go!";
      this.btnStatus='btn-primary';
    }
  }
}
