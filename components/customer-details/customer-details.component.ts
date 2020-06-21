import { Component, OnInit } from "@angular/core";
import { Customer } from "../../models/customer";
import { CustomersService } from "../../services/customers.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.css"]
})
export class CustomerDetailsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    country: ""
  };
  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.headerTitle = "Customer Details Page";
    this.headerIcon = "fas fa-user";
    this.headerDescription = "View All Customer Details";
    const id = this.activatedRoute.snapshot.params["id"];
    this.customersService
      .getCustomer(id)
      .subscribe(customer => (this.customer = customer));
  }
}
