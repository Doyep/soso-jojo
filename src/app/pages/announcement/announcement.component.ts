import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { MainComponent } from "../../components/main/main.component";

@Component({
  selector: 'app-announcement',
  standalone: true,
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
  imports: [MatButtonModule, RouterLink, FooterComponent, MainComponent]
})
export class AnnouncementComponent {
}
