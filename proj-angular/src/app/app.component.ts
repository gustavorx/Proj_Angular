import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "gustavo";
  esconder = true;

  alterarNome(nome: any) {
    this.nome = nome.target.value;
  }
  adicionar(nomeInput: any) {
    this.nome = nomeInput.value

    if (nomeInput.value.lenght <= 0) {
      this.esconder = false;
    } else {
      this.esconder = true
    }

  }

}
