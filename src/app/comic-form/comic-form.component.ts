
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ComicServiceService } from '../comic-service.service';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.scss'],
})
export class ComicFormComponent {
  form: FormGroup;
  textInputs: string[] = Array(10).fill('');

  @Output() updatePanels = new EventEmitter<string[]>();

  constructor(private fb: FormBuilder, private comicApiService: ComicServiceService) {
    this.form = this.fb.group({});

    for (let i = 0; i < this.textInputs.length; i++) {
      const controlName = `panel${i + 1}`;
      this.form.addControl(controlName, new FormControl(''));
    }
  }

  onSubmit(): void {
    const textInputs = Object.values(this.form.value);
    const concatenatedText = textInputs.join(' ');

    this.comicApiService.generateComic(concatenatedText).subscribe(
      (response:any) => {
        this.updatePanels.emit(response);
      },
      (error:any) => {
        // Handle API error here
      }
    );
  }

  clearForm(): void {
    this.form.reset(); 
    this.updatePanels.emit([]);
  }
}
