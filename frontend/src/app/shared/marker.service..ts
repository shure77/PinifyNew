//das ist der pin data service. Dieser holt die Daten.
import { Injectable } from "@angular/core";
import { IMarker} from "./marker";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators'

//über die Injectable annotation sagen wir dem Service, dass er über Root für alle Components ansprechbar ist
@Injectable({
  providedIn:'root'
})
export class MarkerService {
  //hier wird die Webserver Domain definiert
  private markerBackendUrl = 'http://localhost/PinifyNew/backend';

  //der http client wird über den constructor via Dependency Injection geholt
  constructor (private http: HttpClient) {}

  //getPins mappt die Anwort vom server automatisch zu einem Array of pins
  //return Type ist Observable<IPin[]>
  //exception handling mit pipe
  getMarkers(): Observable<IMarker[]> {
    return this.http.get<IMarker[]>(`${this.markerBackendUrl}/api/readMarkers.php`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createMarker(marker: IMarker): Observable<IMarker> {
    return this.http.post<IMarker>(`${this.markerBackendUrl}/api/create.php`, marker);
  }

  updateMarker(marker: IMarker) {
    return this.http.put<IMarker>(`${this.markerBackendUrl}/api/update.php`, marker);
}

deleteMarker(id: number) {
  return this.http.delete<IMarker>(`${this.markerBackendUrl}/api/delete.php/?id=${id}`);
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
