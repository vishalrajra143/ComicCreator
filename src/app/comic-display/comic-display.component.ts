// comic-display.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-display',
  templateUrl: './comic-display.component.html',
  styleUrls: ['./comic-display.component.scss'],
})
export class ComicDisplayComponent {
  @Input() comicPanels!: string[]; // Assuming each panel is a string

  // Additional logic for displaying comic panels can be added here
}