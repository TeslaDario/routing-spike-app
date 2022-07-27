import { Group } from './group.model';

export interface Post {
    id: string;
    userId: string;
    groupId: Group['id'];
    image?: string;
    body: string;
    createdAt: Date;
}
