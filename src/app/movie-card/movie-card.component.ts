import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'

import { GenreComponent } from '../genre/genre.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { DirectorComponent } from '../director/director.component';
import { TrailerComponent } from '../trailer/trailer.component';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  genres: any[] = [];


  constructor(public fetchApiData: FetchApiDataService, public dialog: MatDialog) { }

ngOnInit(): void {
  this.getMovies();
  this.getGenres();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
  
  getGenres(): void {
    this.fetchApiData.getGenresList().subscribe((resp: any) => {
      this.genres = resp;
      return this.genres;
    });
  }

  openGenreDialog(ids: string[]): void {
    let genresDataArray: any[] = [];
    ids.forEach((genre) => {
      let genresObj = this.genres.find((g) => genre === g._id);
      genresDataArray.push(genresObj);
    });
    this.dialog.open(GenreComponent, {
      data: {
        genresArray: genresDataArray,
      },
      width: '500px',
    });
  }

  openTrailerDialog(title: string, trailerUrl: string): void {
    this.dialog.open(TrailerComponent, {
      data: {
        title: title,
        trailerUrl: trailerUrl
      },
      width: '500px',
    });
  }

  openSynopsisDialog(title: string, description: string): void {
    this.dialog.open(SynopsisComponent, {
      data: {
        title: title,
        description: description,
      },
      width: '500px',
    });
  }

  openDirectorDialog(name: string, bio: string, portrait:string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name: name,
        bio: bio,
        portrait: portrait,
      },
      width: '500px',
    });
  }

 

  
}