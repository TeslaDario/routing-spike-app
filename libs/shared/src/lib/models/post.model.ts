import { Group } from './group.model';

export interface Post {
    id: string;
    autor: string;
    groupId: Group['id'];
    image?: string;
    body: string;
    createdAt: Date;
}
