import { Chat } from '../models';
import { Message } from '../models/message.model';

export const MOCK_CHATS: Chat[] = Array.from({ length: 20 }, (_, i) => ({
    id: `c${i + 1}`,
    name: `Chat ${i + 1}`,
}));

export const MOCK_MESSAGES: Message[] = [
    {
        id: 'm1',
        userId: 'u1',
        fromMe: false,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm2',
        userId: 'u1',
        fromMe: false,
        chatId: 'c3',
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industryx's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum. 


Contrary to popular belief, 
Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
and going through the cites of the word in classical literature, discovered the undoubtable source. 
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
(The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance. 
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        createdAt: new Date(),
    },
    {
        id: 'm3',
        userId: 'u1',
        fromMe: false,
        chatId: 'c2',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'm4',
        userId: 'u1',
        fromMe: true,
        chatId: 'c1',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'm5',
        userId: 'u1',
        fromMe: true,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm6',
        userId: 'u1',
        fromMe: false,
        chatId: 'c2',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm7',
        userId: 'u1',
        fromMe: false,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm8',
        userId: 'u1',
        fromMe: false,
        chatId: 'c3',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'm9',
        userId: 'u1',
        fromMe: false,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm10',
        userId: 'u1',
        fromMe: false,
        chatId: 'c3',
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industryx's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum. 


Contrary to popular belief, 
Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
and going through the cites of the word in classical literature, discovered the undoubtable source. 
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
(The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance. 
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        createdAt: new Date(),
    },
    {
        id: 'm11',
        userId: 'u1',
        fromMe: false,
        chatId: 'c2',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'm12',
        userId: 'u1',
        fromMe: true,
        chatId: 'c1',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'm13',
        userId: 'u1',
        fromMe: true,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm14',
        userId: 'u1',
        fromMe: false,
        chatId: 'c2',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm15',
        userId: 'u1',
        fromMe: false,
        chatId: 'c1',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'm16',
        userId: 'u1',
        fromMe: false,
        chatId: 'c3',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
];
