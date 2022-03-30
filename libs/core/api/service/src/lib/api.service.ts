import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiRequestOptions, getApiRequestOptions} from "./api.util";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly httpClient: HttpClient) { }

  static makeUrl(url: string): string {
    return url.startsWith('http') ? url : url;
  }

  get<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.get<T>(ApiService.makeUrl(url), getApiRequestOptions(options));
  }

  post<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.post<T>(ApiService.makeUrl(url), body ?? null, getApiRequestOptions(options));
  }

  patch<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.patch<T>(ApiService.makeUrl(url), body, getApiRequestOptions(options));
  }

  put<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.put<T>(ApiService.makeUrl(url), body, getApiRequestOptions(options));
  }

  delete<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.delete<T>(ApiService.makeUrl(url), getApiRequestOptions(options));
  }
}
