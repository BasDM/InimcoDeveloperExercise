import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  backendMessage?: string;
  backendTime?: string;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<{ message: string; time: string }>('http://localhost:5108/api/test')
      .subscribe({
        next: data => {
          this.backendMessage = data.message;
          this.backendTime = data.time;
        },
        error: err => {
          this.backendMessage = 'Error connecting to backend';
        }
      });
  }
}