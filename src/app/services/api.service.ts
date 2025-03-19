import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http=inject(HttpClient)

  // getEmail(){
  //   return this.http.get("https://mail.google.com/mail/u/0/?fs=1&to=prathameshgosavi99@gmail.com&tf=cm")
  // }
}
