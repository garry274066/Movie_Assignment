import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { MovieserviceService} from '../../movieservice.service'

@Component({
  providers:[DashboardComponent],
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})

export class AddMoviesComponent implements OnInit {

  name:any;
  budget:any;
  director:any;
  imdb:any;
 data:any[];
  constructor(private dashboard:DashboardComponent,private movie:MovieserviceService) { }

  ngOnInit(): void {
  }

  submitMovies()
  {
    this.movie.setParam(true)
    this.data =[]
    this.data = [
      {name: this.name,
      budget: this.budget,
      director: this.director,
      imdb: this.imdb}
    ]
   
    console.log(this.data)
   
   this.movie.getMovies().then(data=>
    {
      data.push({name: this.name,
        budget: this.budget,
        director: this.director,
        imdb: this.imdb})
      console.log(data)

      sessionStorage.setItem("movieData",JSON.stringify(data));
    
    }
  )

  }
   
}