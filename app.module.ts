import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { TopnavComponent } from "./components/topnav/topnav.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageHeaderComponent } from "./utils/page-header/page-header.component";
import { CleanNamePipe } from "./pipes/clean-name.pipe";
import { NewCustomerComponent } from "./components/new-customer/new-customer.component";
import { CustomerDetailsComponent } from "./components/customer-details/customer-details.component";
import { EditCustomerComponent } from "./components/edit-customer/edit-customer.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    PageNotFoundComponent,
    CustomersComponent,
    ContactsComponent,
    PageHeaderComponent,
    CleanNamePipe,
    NewCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
