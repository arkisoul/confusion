import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Leader } from '../shared/leader';

@Injectable()
export class LeaderService {

    constructor(
        private http: HttpClient,
        private processHTTPMsgService: ProcessHTTPMsgService
    ) { }

    getLeaders(): Observable<Leader[]> {
        return this.http.get(baseURL + 'leaders')
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getLeader(id: string): Observable<Leader> {
        return this.http.get(baseURL + 'leaders/' + id)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getFeaturedLeader(): Observable<Leader> {
        return this.http.get(baseURL + 'leaders?featured=true')
            .map(leaders => leaders[0])
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

}
