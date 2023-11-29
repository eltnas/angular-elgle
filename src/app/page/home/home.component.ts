import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopComponent} from "../../components/top/top.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
