import { Component } from '@angular/core';
import { Validator,FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-multiforms',
  templateUrl: './multiforms.component.html',
  styleUrls: ['./multiforms.component.css']
})
export class MultiformsComponent {
  isLinear:boolean=true;
  multiform=new FormGroup({
    details:new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
    }),
    contact:new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
    }),
    location:new FormGroup({
      phone:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
    })
  });
  get detailsForm(){
    return this.multiform.get('details') as FormGroup;
  }
  get contactForm(){
    return this.multiform.get('contact') as FormGroup;
  }
  get locationForm(){
    return this.multiform.get('location') as FormGroup;
  }
  onSubmit(){
    console.log(this.multiform.value);
    
  }
}
