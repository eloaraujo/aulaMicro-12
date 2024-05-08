import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula12';
  //booleano para criar se o campo está habilitado ou desabilitado
  //desabilitado: boolean = true;

  imageUrl: String = "https://picsum.photos/id/1/200/300";
}
