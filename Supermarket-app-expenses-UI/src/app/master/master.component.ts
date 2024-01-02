import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendorDialogComponent } from '../vendor-dialog/vendor-dialog.component';


interface Vendor {
  name: string;
  address: string;
  contact: string;
}


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})


export class MasterComponent {
  
  expenseTypes: string[] = ['Rent', 'Tax', 'Electricity Bill', 'Water'];
  categories: string[] = ['Personal Care & Hygiene', 'Cooking Oils/Cereals', 'Packaged Food', 'Home Cleaning Material'];
  brands: string[] = ['Tata', 'Gold', 'Surya', 'Nike'];
// Initialize an empty array of vendors

  transactionTypes: string[] = ['Sales', 'Purchases'];

  newExpenseType: string = '';
  newCategory: string = '';
  newBrand: string = '';
  newTransactionType: string = '';
 
 
  vendors: Vendor[] = [
    {
      name: 'Surya',
      address: '201 Main Street',
      contact: '987657231',
    },
    {
      name: 'Zamir',
      address: '456 Elm Avenue',
      contact: '986756342',
    }
  ];
  
// Initialize an empty array of vendors


  addExpenseType(expenseType: string) {
    this.expenseTypes.push(expenseType);
  }
  

  // Implement similar functions for other data (categories, brands, vendors, transactionTypes)

  editItem(array: string[], index: number, newValue: string) {
    array[index] = newValue;
  }
  
  deleteItem(array: string[], index: number) {
    array.splice(index, 1);
  }

  addCategory(category: string) {
    this.categories.push(category);
  }

  addBrand(brand: string) {
    this.brands.push(brand);
  }
  
  addTransactionType(type: string) {
    this.transactionTypes.push(type);
  }
  
  constructor(public dialog: MatDialog) {}

  

    openVendorDialog(): void {
      const dialogRef = this.dialog.open(VendorDialogComponent);
  
      dialogRef.afterClosed().subscribe((result) => {

        if (result) {
          // Push the new vendor data to the vendors array
          this.vendors.push(result);
          console.log(this.vendors)
        }
       
      });
    }

    editVendorItem(vendor: VendorDialogComponent, newvalue: string) {
      // Update the name property of the vendor with newValue
      vendor.vendorName = newvalue;
    }
    
    deleteVendorItem(index: number) {
      // Use the index to remove the vendor at the specified position
      this.vendors.splice(index, 1);
    }

}


