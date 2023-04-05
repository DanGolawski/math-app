import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public showError(errorMessage: string): void {
    const notification = document.createElement('div');
    notification.classList.add('error-notification');
    notification.classList.add('notification');
    notification.innerText = errorMessage;
    document.getElementsByTagName('body')[0].appendChild(notification);
    this.hideNotification();
  }

  private hideNotification(): void {
    setTimeout(() => {
      const notifications = document.getElementsByClassName('notification');
      for (let i = 0; i < notifications.length; i++) {
        notifications[i].remove();
      }
    }, 4000);
  }
}
