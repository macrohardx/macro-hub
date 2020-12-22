import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChatService } from './services/chat.service';
import { AdminChatService } from './services/admin-chat.service';

@NgModule({
    declarations: [],
    exports: [
        HttpClientModule
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ChatService, AdminChatService]
})
export class CoreModule {}
