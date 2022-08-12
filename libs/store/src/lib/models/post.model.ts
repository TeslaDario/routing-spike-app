import { Group } from './group.model';

export interface Post {
    id: string;
    userId: string;
    groupId: Group['id'];
    image?: string;
    title: string;
    body: string;
    createdAt: Date;
}
