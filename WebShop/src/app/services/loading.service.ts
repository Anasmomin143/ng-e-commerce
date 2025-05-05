import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;
  private isLoading = new BehaviorSubject<boolean>(false);

  // Expose observable to components
  public isLoading$ = this.isLoading.asObservable();

  constructor() {}

  show() {
    this.loadingCount++;
    this.isLoading.next(true);
  }

  hide() {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      this.isLoading.next(false);
    }
  }
}
