import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Course {
  value: string;
  viewValue: string;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Snackbar duration in milliseconds
    });
  }
  courses: Course[] = [
    {value: 'mean', viewValue: 'MEAN Stack'},
    {value: 'mern', viewValue: 'MERN Stack'},
    {value: 'devops', viewValue: 'Dev Ops'},
  ];

  dataSource = EXAMPLE_DATA;
  childrenAccessor = (node: FoodNode) => node.children ?? [];
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];
