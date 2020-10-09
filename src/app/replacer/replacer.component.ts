import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Form {
  textToFind: string;
  replaceWith: string;
  originalText: string | any;
  resultText: string;
}


@Component({
  selector: 'app-replacer',
  templateUrl: './replacer.component.html',
  styleUrls: ['./replacer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReplacerComponent implements OnInit {

  replacerData = new FormGroup({
    textToFind: new FormControl('', [Validators.required]),
    replaceWith: new FormControl(''),
    originalText: new FormControl('', [Validators.required]),
    resultText: new FormControl('', [Validators.required]),
  });

  constructor(private snack: MatSnackBar) { }

  ngOnInit() {
    this.replacerData.controls.resultText.disable();
  }


  triggerReplacer() {
    const form: Form = this.replacerData.getRawValue();
    if (form.textToFind && form.originalText) {
      form.resultText = form.originalText.replaceAll(form.textToFind, form.replaceWith);
      this.replacerData.controls.resultText.setValue(form.resultText);
      this.copyResults();
    }
  }


  copyResults() {
    if (this.replacerData.controls.resultText.value) {
      console.log('has value');
      this.copy(this.replacerData.controls.resultText.value);
    }
  }

  copy(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    const msg = 'Result copied to clipboard';
    this.snack.open(msg, 'Close');
}

}
