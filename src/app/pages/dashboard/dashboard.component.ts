import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import { MovieserviceService} from '../../movieservice.service'
import {TableModule} from 'primeng/table';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private movieService: MovieserviceService) { }
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  movies:any[];
  moviesTemp:any[];
  cols:any[];
  checkData:boolean
  showTable:boolean = false

  ngOnInit() {

    this.movies = []
    this.moviesTemp = []
this.cols= [
  { field: 'name', header: 'Movie Name'},
  { field: 'budget', header: 'Movie Budget'},
  { field: 'director', header: 'Movie Director'},
  { field: 'imdb', header: 'Imdb Rating'},
]

this.movieService.getParam().subscribe(data=>
{
this.checkData = data
})

if(this.checkData===false)
{
  this.showTable=true
  this.movieService.getMovies().then(movies=>this.movies=movies)
}

else
{
  console.log(this.checkData)
  this.moviesTemp = JSON.parse(sessionStorage.getItem("movieData"));
  this.movies = this.moviesTemp
  console.log(this.movies)
setTimeout(()=> this.showTable=true,5)
 
}


    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  showMovieDetails(movie)
  {
    console.log(movie)

    this.movieService.setDetailsParam(movie);
    

  }

}
