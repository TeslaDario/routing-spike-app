export interface Task {
    id: string;
    userId: string;
    image?: string;
    title: string;
    body: string;
    createdAt: Date;
    done?: boolean;
}
