import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent implements OnInit {

  @Input()
  celphone:string = "(44) 99850-5518"
  @Input()
  faceLink:string = ""
  @Input()
  instaLink:string = ""

  constructor() {
  }

  ngOnInit() {
  }

}
