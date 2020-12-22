import { ChatSidebarComponent } from '../pages/chat/chat-sidebar/chat-sidebar.component';
import { ChatRoomComponent } from '../pages/chat/chat-room/chat-room.component';
import { FooterComponent, HeaderComponent } from '../shared/shared.components';
import { UserSettingsComponent } from '../pages/user-settings/user-settings.component';

/**
 * https://ui-router.github.io/guide/views
 */
export const AppStates = [
    {
        abstract: true,
        name: 'root',
        url: '',
        views: {
            'header': { component: HeaderComponent },
            'footer': { component: FooterComponent }
        }
    },
    {
        parent: 'root',
        name: 'home',
        url: '/home',
        views: {
            '!sidebar': { component: ChatSidebarComponent },
            '!main': { component: ChatRoomComponent },            
        }
    },
    {
        parent: 'root',
        name: 'user-settings',
        url: '/user-settings',
        views: {
            '!sidebar': { component: ChatSidebarComponent },
            '!main': { component: UserSettingsComponent },            
        }
    }
];