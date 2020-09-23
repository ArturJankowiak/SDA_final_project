import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleJson } from './../../models/sampleJson.interface';
import { HttpService2 } from 'src/app/services/http.service2';

@Component({
  selector: 'app-reading-json-files',
  templateUrl: './reading-json-files.component.html',
  styleUrls: ['./reading-json-files.component.scss']
})
export class ReadingJsonFilesComponent implements OnInit {
  sampleJson: Observable<SampleJson[]>;

  constructor(private httpService2: HttpService2) { }

  ngOnInit(): void {
  this.httpService2.fetchSampleJson().subscribe((res) => console.log(res));
  }
}