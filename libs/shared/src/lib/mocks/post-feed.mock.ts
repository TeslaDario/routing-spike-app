import { Group, Post } from '../models';

export const MOCK_GROUPS: Group[] = [
    { id: 'g1', groupName: 'Group 1', image: 'assets/icons/icon-72x72.png' },
    { id: 'g2', groupName: 'Group 2' },
    { id: 'g3', groupName: 'Group 3', image: 'assets/icons/icon-72x72.png' },
    { id: 'g4', groupName: 'Group 4', image: 'assets/icons/icon-72x72.png' },
    { id: 'g5', groupName: 'Group 5', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
    { id: 'gz', groupName: 'Group z', image: 'assets/icons/icon-72x72.png' },
];

export const MOCK_POSTS: Post[] = [
    {
        id: 'p1',
        autor: 'John Doe',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p2',
        autor: 'John Doe',
        groupId: 'g3',
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
        autor: 'John Doe',
        groupId: 'g2',
        image: 'assets/icons/icon-72x72.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'p4',
        autor: 'John Doe',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
    {
        id: 'p5',
        autor: 'John Doe',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p6',
        autor: 'John Doe',
        groupId: 'g2',
        image: 'assets/icons/icon-72x72.png',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p7',
        autor: 'John Doe',
        groupId: 'g1',
        image: 'assets/icons/icon-72x72.png',
        body: 'This is some dummy text...',
        createdAt: new Date(),
    },
    {
        id: 'p8',
        autor: 'John Doe',
        groupId: 'g3',
        image: 'assets/icons/icon-72x72.png',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdAt: new Date(),
    },
];
