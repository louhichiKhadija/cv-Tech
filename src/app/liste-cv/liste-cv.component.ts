import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {

  @Input() personnes: Personne[]
  @Output() selectedPersonne= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPersonne(selectedPersonne){
    this.selectedPersonne.emit(
      selectedPersonne
    )

  }

}
