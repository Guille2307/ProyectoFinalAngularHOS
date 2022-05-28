import { ApiServiceService } from './../../core/services/Api/api-service.service';
import { IHero } from './../../core/services/models/hero.model';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public hero?: IHero;
  @Input() public editMode: boolean = true;
  public heroForm?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiServiceService: ApiServiceService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.heroForm = this.fb.group({
      character: new FormControl(this.hero ? this.hero.character : '', [
        Validators.required,
      ]),
      role: new FormControl(this.hero ? this.hero.role : '', [
        Validators.required,
      ]),
      difficulty: new FormControl(this.hero ? this.hero.difficulty : '', [
        Validators.required,
      ]),
      universe: new FormControl(this.hero ? this.hero.universe : '', [
        Validators.required,
      ]),
      description: new FormControl(this.hero ? this.hero.description : '', [
        Validators.required,
      ]),

      image: new FormControl(this.hero ? this.hero.image : '', [
        Validators.required,
      ]),
    });
  }
  public saveHero() {
    const formValue = this.heroForm?.value;
    const heroApp$ =
      this.editMode && this.hero
        ? this.apiServiceService.editHero(this.hero._id, formValue)
        : this.apiServiceService.addHero(formValue);
    heroApp$.subscribe((hero) => {
      console.log(hero);
      this.router.navigate(['/heroes']);
    });
  }
}
