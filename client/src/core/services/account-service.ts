import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseUrl = "https://localhost:5001/api/";

  login(creds: any): Observable<User> {
    return this.http.post<User>(this.baseUrl + "account/login", creds).pipe(
      tap(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUser.set(null);
  }
}