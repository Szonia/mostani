import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order: any = {};
  isSubmitting = false;
  successMessage: string | null = null;

  constructor(private router:Router, private cartServ:CartService){}

  submitOrder(form: any) {
    
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.cartServ.addOrder(this.order)
      this.successMessage = 'Rendelés sikeresen leadva!';

      setTimeout(() => {
        this.isSubmitting = false; 
        form.resetForm(); 
        this.router.navigate(["/"])
        
      }, 4000);
    }
  }
}





// import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements AfterViewInit {
//   @ViewChild('orderForm') orderForm!: NgForm;

//   order = {
//     firstName: '',
//     lastName: '',
//     postalCode: '',
//     email: '',
//     houseNumber: '',
//     city: '',
//     phoneNumber: ''
//   };

//   isSubmitting = false;
//   successMessage: string | null = null;

  
//   errorMessage: string | null = null;

//   ngAfterViewInit() {
//     if (!this.orderForm) {
//       console.error('orderForm nem elérhető!');
//     }
//   }

//   submitOrder() {
//     if (this.orderForm?.invalid || this.isSubmitting) {
//       return;
//     }

//     this.isSubmitting = true;
//     this.successMessage = 'Rendelés sikeresen leadva!';

//     setTimeout(() => {
//       this.isSubmitting = false;
//       this.orderForm.resetForm(); 
//     }, 500);
//   }

//   isFieldInvalid(fieldName: string): boolean {
//     return (
//       this.orderForm?.controls[fieldName]?.invalid &&
//       this.orderForm?.controls[fieldName]?.dirty
//     );
//   }

  
//   showErrorMessage(fieldName: string) {
//     if (this.isFieldInvalid(fieldName)) {
//       this.errorMessage = 'Csak betűket használj!';
//       setTimeout(() => {
//         this.errorMessage = null; 
//       }, 2000);
//     }
//   }
// }






// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent {
//   order: any = {};
//   isSubmitting = false;
//   successMessage: string | null = null;

//   submitOrder(form: any) {
//     // Only proceed if the form is valid and not already submitting
//     if (form.valid && !this.isSubmitting) {
//       this.isSubmitting = true;
//       this.successMessage = 'Rendelés sikeresen leadva!';

//       // Simulate server delay
//       setTimeout(() => {
//         this.isSubmitting = false; // Reset submitting state
//         form.resetForm(); // Optional: reset the form after submission
//       }, 500);
//     }
//   }
// }


