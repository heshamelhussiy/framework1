import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nameFlage:boolean=false;
  passwordFlag:boolean=false;
  emailFlag:boolean=false;
  ageFlag:boolean=false;

  inputData(data:HTMLInputElement):void{
    
  
    if(data.getAttribute("id")=="userName"){
      if(data.value.length>0){
        this.nameFlage=true
      }
      else{
        this.nameFlage=false
      }
    }
    else if(data.getAttribute("id")=="userEmail"){
     if(data.value.length>0){
      this.emailFlag=true
     }
     else{
      this.emailFlag=false

     }
    }
    else if(data.getAttribute("id")=="userAge"){
      if(data.value.length>0){
        this.ageFlag=true
       }
       else{
        this.ageFlag=false
  
       }
    }
    else if(data.getAttribute("id")=="userPassword"){
      if(data.value.length>0){
        this.passwordFlag=true
       }
       else{
        this.passwordFlag=false
  
       }
     
   

  }
    }
  }
  
