import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  count = 0;

  increment() {
    this.count++;
  }

  ngOnInit() {
    setInterval(() => {
      this.increment();
    }, 500);
  }
}
