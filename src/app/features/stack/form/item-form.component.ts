import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IItem } from '../../../core/models';
import { StackApiService } from '../../../core/api/stack.api';

@Component({
  selector: 'app-form-item',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {

  // private _isEdit = false

  constructor(
    private fb: FormBuilder,
    private stackService: StackApiService
  ) {}

  @Input() item?: IItem
  // set item(item: IItem) {
  //   this.item = item
  //   this._isEdit = true
  // }

  itemForm: FormGroup

  ngOnInit() {
    this.createForm()
    if (this.item) this.setForm(this.item)
  }

  private createForm() {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      dosage: ['', Validators.required],
      servingSize: [0, Validators.required],
      servingType: ['', Validators.required]
    })
  }

  private setForm(item: IItem) {
    this.itemForm.patchValue(item)
  }

  onSubmit() {

    // this.stackService.addItem()
    // this.stackService.editItem()
    // On Add -> Update Store
    // On Edit -> Update Store
  }

}
