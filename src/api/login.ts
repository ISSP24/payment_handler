import axios from 'axios';
type LoginResponse = {
    success: boolean;
    data?: {
        role: 'admin' | 'client' | 'endUser';
        userId: string;
    };
};

export const login = async (code: string): Promise<LoginResponse> => {
    try {
        const res = await axios.post(
            'https://golang-container.mnnqf7qoh65t8.us-east-1.cs.amazonlightsail.com/users/login',
            {
                userId: code,
            }
        );
        //@ts-ignore
        return res.data as LoginResponse;
    } catch (e) {
        return { success: false } as LoginResponse;
    }
};
