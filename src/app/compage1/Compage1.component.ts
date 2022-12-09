import { Component } from '@angular/core';



@Component({
    selector: 'app-compage1',
    templateUrl: './Compage1.component.html',
    styleUrls: ['./Compage1.component.css']
  })
  export class Compage1Component{
    postTitle: string[] = [];
  postDetails: string[] = [];
  imageURL: string[] = [];
  postURL: string[] = [];
  addBackground: boolean[] = [];
  dob: Date =new Date ();
 
  }