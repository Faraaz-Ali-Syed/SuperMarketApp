import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpensesService } from '../services/expenses.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

expForm: FormGroup;

  exptypes: string[] = [
    'Tax',
    'Rent',
    'ElectricityBill',
    'Water'
  ];

  constructor(private _fb: FormBuilder, private _expService: ExpensesService, private _dialogRef: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.expForm = this._fb.group({
      expense_type: '',
      expense_date: '',
      expense_amount: ''
    });
  }

  ngOnInit(): void {
    this.expForm.patchValue(this.data);
  }

  onFormSubmit() {
    if(this.data) {

      this._expService.updateExpense(this.data.id, this.expForm.value).subscribe({
        next:( val:any) => {
          alert('Expense Updated Successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      });

    }
    else {
this._expService.addExpense(this.expForm.value).subscribe({
  next:( val:any) => {
    alert('Expense Added Successfully');
    this._dialogRef.close(true);
  },
  error: (err: any) => {
    console.error(err);
  }
});
    }
  }
}
