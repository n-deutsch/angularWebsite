import { Component, OnInit } from '@angular/core';
import {Podcast} from '../podcast'

@Component({
  selector: 'app-fine-dining',
  templateUrl: './fine-dining.component.html',
  styleUrls: ['./fine-dining.component.css']
})
export class FineDiningComponent implements OnInit {

  public season1: Podcast[] = [];
  public season2: Podcast[] = [];

  constructor() { }

  ngOnInit() {
    this.populateS1();
    this.populateS2();
  }

  public populateS1(){
    this.season1.push(new Podcast("S1E5","assets/audio/fine_dining/season1/fine_dining_5.mp3"));
    this.season1.push(new Podcast("S1E4","assets/audio/fine_dining/season1/fine_dining_4.mp3"));
    this.season1.push(new Podcast("S1E3","assets/audio/fine_dining/season1/fine_dining_3.mp3"));
    this.season1.push(new Podcast("S1E2","assets/audio/fine_dining/season1/fine_dining_2.mp3"));
    this.season1.push(new Podcast("S1E1","assets/audio/fine_dining/season1/fine_dining_1.mp3"));
  }
  
  public populateS2(){
    this.season2.push(new Podcast("S2E1","assets/audio/fine_dining/season1/fine_dining_53.mp3"));
  }

}
