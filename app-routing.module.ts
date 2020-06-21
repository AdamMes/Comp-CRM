import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NewCustomerComponent } from "./components/new-customer/new-customer.component";
import { CustomerDetailsComponent } from "./components/customer-details/customer-details.component";
import { EditCustomerComponent } from "./components/edit-customer/edit-customer.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const appRouter: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "customers/new",
    component: NewCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "customer/:id",
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "customer/:id/edit",
    component: EditCustomerComponent,
    canActivate: [AuthGuard]
  },
  { path: "contacts", component: ContactsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRouter)]
})
export class AppRoutingModule {}
