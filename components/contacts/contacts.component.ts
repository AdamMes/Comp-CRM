import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/models/contact";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  contacts: Array<Contact> = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.headerTitle = "Contacts Page";
    this.headerIcon = "fas fa-envelope";
    this.headerDescription = "All Compant Employees Details";
    this.contactsService.getContacts().subscribe((contacts: Array<Contact>) => {
      this.contacts = contacts;
      this.contacts = this.contacts.map(contact => {
        if (typeof contact.phones === "undefined") contact.phones = [];
        return contact;
      });
    });
  }
}
