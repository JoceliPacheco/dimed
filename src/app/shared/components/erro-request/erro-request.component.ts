import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'erro-request',
  templateUrl: './erro-request.component.html',
  styleUrls: ['./erro-request.component.scss']
})
export class ErroRequestComponent   {
  @Input('title') title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
