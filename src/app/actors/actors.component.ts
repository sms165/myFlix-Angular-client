import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  constructor(
      /**
     * Injects data from the MovieCard component using the MAT_DIALOG_DATA injection token.
     * The data can be accessed to populate the view.
     * @param data
     */
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string,
      bio: string,
      portrait: string
    }
  ) { }

  ngOnInit(): void {
  }

}