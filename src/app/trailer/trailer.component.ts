import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {

  safeUrl: any;

  constructor(
    /**
   * Injects data from the MovieCard component using the MAT_DIALOG_DATA injection token.
   * The data can be accessed to populate the view.
   * @param data
   */
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      trailerUrl: string;
     
    },
    private _sanitizer: DomSanitizer
  ) {
    
  }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.trailerUrl);
  }
}