import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DevOps Starter Kit';
  healthStatus: any;
  techData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/health').subscribe(
      (data) => this.healthStatus = data,
      (error) => console.error('Error fetching health status', error)
    );

    this.http.get<any[]>('http://localhost:8080/api/data').subscribe(
      (data) => this.techData = data,
      (error) => console.error('Error fetching data', error)
    );
  }
}    
