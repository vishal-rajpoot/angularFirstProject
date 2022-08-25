import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title= "Basic Form";
  userData : any={};
  display = true;
  toggle(){
    this.display=!this.display;
  }
  getData(data :NgForm){
    console.warn(data)
    this.userData = data
  }
  constructor() { }
  @Input() count = 0;
  ngOnInit(): void {
  }

}
