import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AlertComponent } from './components/alert/alert.component';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';

@NgModule({
    declarations: [NavbarComponent, TabsComponent, AlertComponent, ToastNotificationComponent],
    imports: [CommonModule],
    exports: [NavbarComponent, TabsComponent, AlertComponent, ToastNotificationComponent],
})
export class SharedModule {}
