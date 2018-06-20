import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { OmdbService } from '../../services/omdb.service.client'

@Component({
  selector: 'app-omdbtest',
  templateUrl: './omdbtest.component.html',
  styleUrls: ['./omdbtest.component.css']
})
export class OmdbtestComponent implements OnInit {

  @ViewChild('f') searchForm: NgForm;

  title: string;
  movies: any[];

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  search(){
  	this.title = this.searchForm.value.title;
  	this.omdbService.searchMovie(this.title).subscribe(
		(data: any) => {
			this.movies = data.Search;
		}
  	)
  }

}
