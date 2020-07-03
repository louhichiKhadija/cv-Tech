import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne: Personne

  constructor() { }

  ngOnInit() {
    this.personnes=[
      new Personne(1, 'khadija', 'khadj',26, 'rotating_card_profile3.png',100000,
                    'I"m the new Sinatra, and since I made it here I can make it anywhere,yeah, they love me everywhere',
                    'developper'),
      new Personne(2, 'khaw', 'koukou',26, 'rotating_card_profile.png',200000,
                    'I"m the new Sinatra, and since I made it here I can make it anywhere,yeah, they love me everywhere',
                    'IT consultant')
                    
    ]
  }

  selectPersonne(personne){
    this.selectedPersonne=personne
  }

}
