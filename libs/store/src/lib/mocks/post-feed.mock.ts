import { Group, Post } from '../models';

export const MOCK_GROUPS: Group[] = Array.from({ length: 20 }, (_, i) => ({
    id: `g${i + 1}`,
    groupName: `Group ${i + 1}`,
    image: 'assets/icons/icon-72x72.png',
}));

export const MOCK_POSTS: Post[] = [
    {
        id: 'p1',
        userId: 'u1',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p2',
        userId: 'u1',
        groupId: 'g3',
        title: 'This is some dummy title...',
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
        id: 'p3',
        userId: 'u1',
        groupId: 'g2',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'p4',
        userId: 'u1',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'p5',
        userId: 'u1',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p6',
        userId: 'u1',
        groupId: 'g2',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p7',
        userId: 'u1',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p8',
        userId: 'u1',
        groupId: 'g3',
        image: 'assets/icons/icon-72x72.png',
        title: 'This is some dummy title...',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
];
