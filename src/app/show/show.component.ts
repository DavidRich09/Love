import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
//import json que esta en la carpeta de assets
import frasesData from '../../assets/frases.json'; // Importa el JSON

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  frasesDeAmor: string[] = [];
  fraseActual: string = "Click para un mensajito bonito";

  showMessage: boolean = false;
  hearts: { color: string }[] = [];

  ngOnInit() {
    this.frasesDeAmor = frasesData.frasesDeAmor; // Asigna las frases del JSON
    this.fraseActual = "Click para un mensajito bonito"; // Frase inicial
    this.generarCorazones();
  }

  actualizarFrase() {
    // Seleccionar una frase al azar
    this.fraseActual = this.frasesDeAmor[Math.floor(Math.random() * this.frasesDeAmor.length)];
    this.showMessage = true;

    // Regenerar los corazones con cada clic para variar
    //this.generarCorazones();
  }

  generarCorazones() {
    // Limpiar el array de corazones
    this.hearts = [];

    // Colores disponibles para los corazones
    const colores = ['heart-red', 'heart-pink', 'heart-purple', 'heart-yellow', 'heart-blue'];

    // Generar 5 corazones con colores al azar
    for (let i = 0; i < 5; i++) {
      const colorRandom = colores[Math.floor(Math.random() * colores.length)];
      this.hearts.push({ color: colorRandom });
    }
  }
}
