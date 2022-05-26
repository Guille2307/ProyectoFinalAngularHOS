import { ApiFieldService } from './../../core/services/ApiField/api-field.service';
import { IField } from './../../core/services/models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  public fields?: IField[];

  constructor(private apiFieldService: ApiFieldService) {}

  ngOnInit(): void {
    this.apiFieldService.getFields().subscribe((fields) => {
      this.fields = fields;
    });
  }
}
