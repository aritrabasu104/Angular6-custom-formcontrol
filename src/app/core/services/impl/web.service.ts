import { Country } from '@app/shared'
import { Injectable } from '@angular/core'
import { RestService } from '@app/core/services/rest.service'

import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { WebServiceUrls } from '@assets/web-service-urls'
import { HttpClient } from '@angular/common/http'

const CACHE_SIZE = 1
@Injectable({
  providedIn: 'root'
})
export class WebService extends RestService {
  private countryNameCache: Observable<Country[]>
  constructor(private httpClient:HttpClient){
    super(httpClient)
  }
  public getAllCountries(): Observable<Country[]> {
    if (!this.countryNameCache) {
      this.countryNameCache = this.get(WebServiceUrls.GET_ALL_COUNTRY_NAMES_WITH_ALPHACODE).pipe(shareReplay(CACHE_SIZE))
    }
    return this.countryNameCache
  }
}
