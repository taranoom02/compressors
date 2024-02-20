// main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // Fix the typo here, it should be styleUrls
})
export class MainComponent {
  cards = [
    { imageUrl: 'assets/images/download.jpeg', imageAlt: 'Card 1 Image', title: 'Compressor', description: 'working Condition' },
    { imageUrl: 'assets/images/1.jpeg', imageAlt: 'Card 2 Image', title: 'Generator', description: 'Good Condition' },
    { imageUrl: 'assets/images/3.jpeg', imageAlt: 'Card 3 Image', title: 'Generator', description: 'In Working' },
    { imageUrl: 'assets/images/6.jpeg', imageAlt: 'Card 1 Image', title: 'Compressor', description: 'working in good condition' },
    { imageUrl: 'assets/images/7.jpeg', imageAlt: 'Card 2 Image', title: 'Compressor', description: 'working in good condition' },
    { imageUrl: 'assets/images/8.jpeg', imageAlt: 'Card 3 Image', title: 'Generator', description: 'In Working' },
    
  ];

}
