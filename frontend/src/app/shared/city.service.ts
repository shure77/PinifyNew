//das ist der pin data service. Dieser holt die Daten.
import { Injectable } from "@angular/core";
import { ICity} from "./city";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators'

//über die Injectable annotation sagen wir dem Service, dass er über Root für alle Components ansprechbar ist
@Injectable({
  providedIn:'root'
})
export class CityService {
  //hier wird die Webserver Domain definiert
  private cityBackendUrl = 'http://localhost/PinifyNew/backend';

  //der http client wird über den constructor via Dependency Injection geholt
  constructor (private http: HttpClient) {}

  //getPins mappt die Anwort vom server automatisch zu einem Array of pins
  //return Type ist Observable<IPin[]>
  //exception handling mit pipe
  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`${this.cityBackendUrl}/api/readCities.php`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getCity(city: string): Observable<ICity | undefined> {
    return this.getCities().pipe(
      map((cities: ICity[]) => cities.find(p => p.city === city))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
