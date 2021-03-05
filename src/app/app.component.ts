import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first website';
  imgurl ='https://content.tailster.com/blog/media/adorable-animal-animal-photography-259803.jpg';
  isActive = false;
  myemail="farid@gmail.com";
  fullName = "Farid Ghanayim"
  aaaaa= '11111'
  bbbbb='22222'

  switch(){
    setTimeout(() => {
      this.isActive = !this.isActive;
    }, 2000);
  }

  dosomething(){
    this.isActive = true;
  }

  showMyEmail(email){
    this.myemail = email;
  }

  displayName(){
    alert(this.fullName);
  }
}