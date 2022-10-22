import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-procesador',
  templateUrl: './procesador.component.html',
  styleUrls: ['./procesador.component.scss'],
})
export class ProcesadorComponent implements OnInit {
  resultado: string = '';
  constructor(private documentoService: DocumentoService) {}

  ngOnInit(): void {
    console.log('a');
    this.documentoService.getDemo().subscribe((t: any) => {
      console.log('res', t);
      this.resultado = t.resu;
    });
  }
}
