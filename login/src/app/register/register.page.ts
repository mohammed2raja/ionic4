import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username : string = "";
  password : string = "";
  cpassword : string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public alert: AlertController,
    public router: Router) { }
  ngOnInit() {
  }

  async register(){
    const {username, password, cpassword} = this;
    if(password != cpassword) {
      this.showAlert("Error!","Password do not matched!");
      return console.error("Passwords not matched!");
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);


      // this.user.setUser({
      //   username, uid: res.user.uid
      // });

      this.showAlert("Success!", "Welcome aboard!");

      this.router.navigate(['/tabs']);

    }catch(err){
      console.dir(err);
      this.showAlert("Error!", err.message);
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    });

    await alert.present()
  }

}
