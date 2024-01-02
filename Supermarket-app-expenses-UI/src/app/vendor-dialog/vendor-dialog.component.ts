import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Vendor {
  name: string;
  address: string;
  contact: string;
}

@Component({
  selector: 'app-vendor-dialog',
  templateUrl: './vendor-dialog.component.html',
  styleUrls: ['./vendor-dialog.component.scss']
})
export class VendorDialogComponent {
  
  vendorName: string = '';
  vendorAddress: string = '';
  vendorContact: string = '';

  vendors: Vendor[] = [
    {
      name: 'ABC Vendor',
      address: '123 Main Street',
      contact: 'John Doe',
    },
    {
      name: 'XYZ Supplier',
      address: '456 Elm Avenue',
      contact: 'Jane Smith',
    }
  ];
  

  constructor(public dialogRef: MatDialogRef<VendorDialogComponent>) {}

  onAddClick(): void {
    // Handle adding the vendor using the form values
    // Pass an object with name, address, and contact properties
    const newVendor: Vendor = {
      name: this.vendorName,
      address: this.vendorAddress,
      contact: this.vendorContact,
    };

    console.log('New Vendor:', newVendor);
  
    // Push the newVendor object into the vendors array
    this.vendors.push(newVendor);
  
    // Close the dialog
    this.dialogRef.close();
  }
 
  onCancelClick(): void {
    this.dialogRef.close();
  }
  }

 

