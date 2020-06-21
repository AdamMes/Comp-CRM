import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  getCountries() {
    const endpoint = "https://restcountries.eu/rest/v2/all";
    return this.httpClient.get(endpoint).toPromise();
  }
}
