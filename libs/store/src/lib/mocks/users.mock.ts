import { User } from '../models';

export const MOCK_USERS: User[] = Array.from({ length: 20 }, (_, i) => ({
    id: `u${i + 1}`,
    name: `John Doe${i + 1}`,
}));
