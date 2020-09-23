import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SampleJson } from './../models/sampleJson.interface';

@Injectable({
    providedIn: "root",
})

export class HttpService2 {
    private sampleJson = new BehaviorSubject<SampleJson[]>([]);
    private url = '/assets/sampleJson';

    constructor(private http: HttpClient) {
        this.fetchSampleJson();
      }

      fetchSampleJson(): Observable<SampleJson[]> {
        return this.http
          .get<SampleJson[]>(this.url)
      }

      getSampleJson(): Observable<SampleJson[]> {
        return this.sampleJson.asObservable();
      }
    }
