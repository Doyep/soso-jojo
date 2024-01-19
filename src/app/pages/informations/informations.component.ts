import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TitleComponent } from "../../components/title/title.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MainComponent } from "../../components/main/main.component";

@Component({
  selector: 'app-informations',
  standalone: true,
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss',
  imports: [MatButtonModule, MatIconModule, RouterLink, TitleComponent, FooterComponent, MainComponent]
})
export class InformationsComponent { }
