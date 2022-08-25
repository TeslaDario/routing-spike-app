import { Chat } from './chat.model';

export interface Message {
    id: string;
    userId: string;
    fromMe: boolean;
    chatId: Chat['id'];
    body: string;
    createdAt: Date;
}
