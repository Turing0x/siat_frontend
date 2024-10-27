import { Consumption } from '@/interfaces/consumprion.interface';
import { TWorker } from '@/interfaces/worker.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/consumptions';

  getConsumptions(): Observable<Consumption[]>{
    return this.http.get<any>(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(
        catchError(e => {
          Swal.fire(
            'Error Interno',
            'Ha ocurrido algo grave. Contacte a soporte por favor',
            'error'
          )
          return throwError(() => e)
        })
      );
  }

  getConsumption(id: number): Observable<Consumption> {
    return this.http.get<Consumption>(`${this.apiUrl}/${id}`);
  }

  saveConsumption(consumption: Consumption) {
    return this.http.post<Consumption>(this.apiUrl, consumption, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  updateConsumption(consumption: Consumption) {
    return this.http.put<Consumption>(`${this.apiUrl}/${consumption.ID}`, consumption, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  deleteConsumption(id: number) {
    return this.http.delete<Consumption>(`${this.apiUrl}/${id}`);
  }

}