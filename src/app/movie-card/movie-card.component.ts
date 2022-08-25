import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'

import { GenreComponent } from '../genre/genre.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { DirectorComponent } from '../director/director.component';
import { TrailerComponent } from '../trailer/trailer.component';
import { ActorsComponent } from '../actors/actors.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  genres: any[] = [];
  actors: any[] = [];
  favoriteMovies: any[] = [];
  users: any[] = [];
  faves: any[] =[];


  constructor(public fetchApiData: FetchApiDataService,  public snackBar: MatSnackBar, public dialog: MatDialog) { }

ngOnInit(): void {
  this.getMovies();
  this.getGenres();
  this.getFavoriteMovies();
}

/**
   * Gets all the movies using API service and populate local state variable
   * @returns array of movies objects
   * @function getMovies
   */
getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Gets all the genres using API service and populate local state variable
   * @returns array of genres objects
   * @function getGenres
   */
  getGenres(): void {
    this.fetchApiData.getGenres().subscribe((resp: any) => {
      this.genres = resp;
      return this.genres;
    });
  }

   /**
    * Opens the genre dialog from GenreComponent
    * @param name 
    * @param description 
    * @function openGenreDialog
    */
  openGenreDialog(name:string, description:string ): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name,
        description: description,
        

      },
      width: '500px',
    });
  }

/**
   * Gets all the actors using API service and populate local state variable
   * @returns array of actors objects
   * @function getActors
   */
  getActors(): void {
    this.fetchApiData.getActors().subscribe((resp: any) => {
      this.actors = resp;
      return this.actors;
    });
  }

  /**
   * Opens the actor dialg
   * @param name 
   * @param bio 
   * @param portrait 
   * @function openActorDialog
   */
  openActorDialog(name:string, bio:string, portrait:string): void {
    this.dialog.open(ActorsComponent, {
      data: {
        name: name,
        bio: bio,
        portrait: portrait

      },
      width: '500px',
    });
  }

  /**
   * Open trailer dialog
   * @param title 
   * @param trailerUrl 
   * @function openActorDialog
   */
  openTrailerDialog(title: string, trailerUrl: string): void {
    this.dialog.open(TrailerComponent, {
      data: {
        title: title,
        trailerUrl: trailerUrl
      },
      width: '500px',
    });
  }

  /**
   * Open synopsis dialog
   * @param title 
   * @param description 
   * @function openSynopsisDialog
   */
  openSynopsisDialog(title: string, description: string): void {
    this.dialog.open(SynopsisComponent, {
      data: {
        title: title,
        description: description,
      },
      width: '500px',
    });
  }

  /**
   * Open director dialog
   * @param name 
   * @param bio 
   * @param portrait 
   * @function openDirectorDialog
   */
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

  /**
   * Gets all the user favorite movies
   * @returns array of favorite movie ids
   * @function getFavoriteMovies
   */
  getFavoriteMovies(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.users = resp;
      this.favoriteMovies= resp.favorites
      
      console.log(this.favoriteMovies);
      return this.favoriteMovies;
    });
  }

  /**
   * Checks if a movie is included in the user's list of favorite movies
   * @param id
   * @returns true if the movie is in the array
   * @function isFav
   */
  isFav(id: string): boolean{
  // var fmov= (this.favoriteMovies.favorites)
    return this.favoriteMovies.includes(id);
  ;
  }

  /**
   * Add movie to favorites
   * @param id 
   * @function addToFavoriteMovies
   */
  addToFavoriteMovies(id: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    })
  }

  /**
   * Remove movie from favorites
   * @param id 
   * @function removeFromFavoriteMovie
   */
  removeFromFavoriteMovies(id: string): void {
    console.log(id);
    this.fetchApiData.removeFavoriteMovie(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    })
  }
  
}