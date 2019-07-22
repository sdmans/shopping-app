import { Component, OnInit } from '@angular/core';

/* Testing retrieving data from Firebase */
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

  constructor (private afs: AngularFirestore) {
    this.afs.collection('comments').valueChanges().subscribe(data => console.log(data));
  }

  ngOnInit() {
    console.log(this.afs)
  }
}


