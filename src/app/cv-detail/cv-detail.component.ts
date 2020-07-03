import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/Personne';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.scss']
})
export class CvDetailComponent implements OnInit {

  @Input() personne: Personne

  constructor() { }

  ngOnInit() {
  }

}
