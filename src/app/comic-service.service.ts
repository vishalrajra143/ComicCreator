import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {
  private apiKey = 'VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM'; // Replace with your actual API key
  private apiUrl =   "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud"; 

  constructor(private http: HttpClient) {}

  generateComic(text: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    const body = {"inputs": text };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError('Error generating comic. Please try again.');
      })
    );
  }
}

