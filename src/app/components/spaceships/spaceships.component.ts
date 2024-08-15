import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spaceship } from '../../models/spaceship.model';

@Component({
  selector: 'app-spaceships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spaceships.component.html',
  styleUrl: './spaceships.component.css'
})
export class SpaceshipsComponent {
  @Input() spaceship:Spaceship = {
    id: 0,
    name: '',
    class: '',
    crew: '',
    image: '',
  };
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.spaceship.id);
  }
}
