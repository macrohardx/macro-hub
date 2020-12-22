import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatSidebarComponent } from './pages/chat/chat-sidebar/chat-sidebar.component';
import { SharedModule } from './shared/shared.module';
import { ChatRoomComponent } from './pages/chat/chat-room/chat-room.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ChatAdminComponent } from './pages/chat/chat-admin/chat-admin.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BootstrapComponent,
    ChatSidebarComponent,
    ChatRoomComponent,
    ChatAdminComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgScrollbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
