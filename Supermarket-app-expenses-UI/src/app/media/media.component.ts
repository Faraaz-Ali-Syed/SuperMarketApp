import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { ExpensesService } from '../services/expenses.service';
import { OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  rowHovered: any = null; // Declare this variable in your component class


  displayedColumns: string[] = [ 'expense_type', 'expense_date', 'expense_amount','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _expService: ExpensesService) {}

  ngOnInit(): void {
    this.getExpense();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getExpense();
        }
      }
    });
  }

  getExpense() {
    this._expService.getExpense().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteExpense(id: number) {
    this._expService.deleteExpense(id).subscribe({
      next: (res) => {
        // Remove the deleted item from the data source
        const index = this.dataSource.data.findIndex(item => item.id === id);
        if (index !== -1) {
          this.dataSource.data.splice(index, 1);
          // Refresh the table
          this.dataSource._updateChangeSubscription(); // Manually trigger the update
        }
  
        alert('Expense Deleted!');
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditForm(data: any) {
   const dialogRef = this._dialog.open(EmpAddEditComponent ,{
    data,
   });
    
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if(val) {
        this.getExpense();
      }
    }
  });  
    
  }

}
