import { Component } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent:number = 0;
  radius:number = 100;
  fullTime:any = "00:01:30";
  timmer:any=false;
  progress: any = 0;
  minutes: any = 1;
  seconds:any = 30;

  elapsed:any = {
    h: "00",
    m: "00",
    s: "00"
  };

  overallTimmer: any = false;

  constructor(private insomnia: Insomnia){

  }

  startTime(){
    if(this.timmer){
      clearInterval(this.timmer);
    }

    if(!this.overallTimmer){
      this.progressTimmer();
      this.insomnia.keepAwake()
      .then(
        () => console.log('success'),
        () => console.log('error')
      );
    }


    this.timmer = false;
    this.percent = 0;
    this.progress = 0;
    
    let timeSplit = this.fullTime.split(":");
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timmer = setInterval(()=>{
      if(this.percent == this.radius)
      clearInterval(this.timmer);

      this.percent = Math.floor((this.progress / totalSeconds) * 100);
      this.progress++;
    }, 1000);

  }
  progressTimmer(){
    let countDownDate = new Date();
    this.overallTimmer = setInterval(()=>{

      let now = new Date().getTime();
      let distance = now - countDownDate.getTime();

      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
      this.elapsed.s = Math.floor((distance % (1000 * 60 )) / 1000 );

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
    })
  }

  pad(num, size){
    let s = num+"";
    while(s.length < size){
      s = "0"+s;
    }
    return s;
  }
  stopTime(){
    clearInterval(this.timmer);
    clearInterval(this.overallTimmer);
    this.overallTimmer = false;
    this.timmer = false;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: "00",
      m: "00",
      s: "00"
    };
    this.insomnia.allowSleepAgain()
    .then(
      () => console.log('success'),
      () => console.log('error')
    );
  }

}
