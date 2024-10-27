import { TWorker } from '@/interfaces/worker.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/workers';

  getWorkers(): Observable<TWorker[]>{
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

  getWorker(id: number): Observable<TWorker> {
    return this.http.get<TWorker>(`${this.apiUrl}/${id}`);
  }

  saveWorker(worker: TWorker) {
    return this.http.post<TWorker>(this.apiUrl, worker, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  updateWorker(worker: TWorker) {
    return this.http.put<TWorker>(`${this.apiUrl}/${worker.id}`, worker, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  deleteWorker(id: number) {
    return this.http.delete<TWorker>(`${this.apiUrl}/${id}`);
  }

  getAditionalData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/aditional`);
  }

}