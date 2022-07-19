export interface Post {
    id: string | number;
    autor: string;
    groupId: string | number;
    groupName: string;
    image?: string;
    body: string;
    createdAt: Date;
}
