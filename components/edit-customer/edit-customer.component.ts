import { Component, OnInit } from "@angular/core";
import { Customer } from "../../models/customer";
import { CustomersService } from "../../services/customers.service";
import { Router, ActivatedRoute, Route } from "@angular/router";
import { CountriesService } from "src/app/services/countries.service";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"]
})
export class EditCustomerComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  id: string = "";
  customers: Customer = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    country: ""
  };
  customer: Customer;
  countries: any;

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}
  ngOnInit(): void {
    this.headerTitle = "Customer Edit Page";
    this.headerIcon = "fas fa-pen";
    this.headerDescription = "Edit Customer Details";
    this.id = this.activateRoute.snapshot.params["id"];
    this.countriesService
      .getCountries()
      .then(countries => {
        this.countries = countries;
        console.log(countries);
      })
      .catch(err => console.log(err));
    this.customersService
      .getCustomer(this.id)
      .subscribe(customer => (this.customer = customer));
  }

  onSubmit({ value, valid }: { valid: boolean; value: Customer }): void {
    if (valid) {
      value.id = this.id;
      this.customersService.updateCustomer(value);
      this.router.navigate(["/customers"]);
    }
  }
}
