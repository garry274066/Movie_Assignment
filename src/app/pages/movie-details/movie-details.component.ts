import { Component, OnInit } from '@angular/core';
import { MovieserviceService} from '../../movieservice.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  moviename:any;
  additionalDetails:any[]
  constructor(private movieService:MovieserviceService) { }

  ngOnInit() {
   this.additionalDetails = [];
    this.movieService.getDetailsParam().subscribe(data=>
      {
        this.moviename = data
        console.log(this.moviename)
      }
     
     
  )

  this.movieService.getAdditionalDetails(this.moviename).then(data=>
    {
      this.additionalDetails = data 
      console.log(this.additionalDetails)
    }
  
  
  )


  }

}
