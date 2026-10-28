import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  private service = inject(AuthService)
  private http = inject(HttpClient)

  // Function appelé a la création du composant
  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products/category-list')
      .subscribe(data => console.log(data))
  }
}
