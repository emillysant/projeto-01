import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { response } from 'express';
import { PostComponent } from './components/post/post.component';
import { SpaceshipService } from './services/spaceship.service';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';
import { Spaceship } from './models/spaceship.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, PrimeiroComponenteComponent, PostComponent, SpaceshipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  // data: any;
  // title = 'projeto-01';
  // user = {
  //   nome:"Mauro",
  //   email:"maumau@gmail.com",
  //   idade: 18,
  //   hasCarteira: false,
  //   image_url: "https://pbs.twimg.com/media/CsUzcXqWYAARYZm.jpg"
  // }
  // frutas = ["maracuja","mamão","laranja","limão"]

  // tirarCarteira():void{
  //   this.user.hasCarteira = true
  // }

  // mudarTitle():void{
  //   this.title = "Novo Titulo"
  //   this.user.nome = "ABLUBLÈ"
  // }

  posts: Post[] = []
  spaceships: Spaceship[] = [];
  searchResults: Spaceship[] = [];
  searchId: number | null = null;
  searchInputRef: HTMLElement | null = null;
  
  constructor(private postService: PostService, private spaceshipService: SpaceshipService){}

  getDados():void{
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    }, err => {
      console.error("Erro ao carregar os dados: ", err);
    })
  }

  ngOnInit(): void {
    this.loadSpaceships();
  }
  loadSpaceships(): void {
    this.spaceshipService.getSpaceships().subscribe(data => {
      this.spaceships = data;
    });
  }

  deleteSpaceship(id: number): void {
    // this.spaceships = this.spaceships.filter(spaceship => spaceship.id !== id);
    this.spaceshipService.deleteSpaceship(id).subscribe(() => {
      this.spaceships = this.spaceships.filter(spaceship => spaceship.id!== id);
    });
  }

  searchById(): void {
    if (this.searchId !== null &&  this.spaceships.length > 0) {
      this.spaceshipService.getSpaceshipById(this.searchId).subscribe(data => {
        this.searchResults = [data];
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.searchInputRef && !this.searchId && !this.searchInputRef.contains(event.target as Node)) {
      this.searchResults = []
    }
  }

  setSearchInputRef(element: HTMLElement): void {
    this.searchInputRef = element;
  }


}
