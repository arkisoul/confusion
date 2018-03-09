import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class FeedbackService {

    constructor(
        private http: HttpClient,
        private processHTTPMsgService: ProcessHTTPMsgService
    ) { }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
        return this.http.post(baseURL + 'feedback', feedback)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

}
