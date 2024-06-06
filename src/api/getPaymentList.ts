import axios from 'axios';
type GetPaymentListParams = {
    userId: string;
    searchField: string;
    allSelected: 1 | 0;
};

export type GetPaymentListResponse = {
    success: boolean;
    data?: {
        date: number;
        receiveFrom: string;
        sumOfRupees: string;
        paymentDetailId: number;
        userId: string;
    }[];
};

export const getPaymentList = async (
    params: GetPaymentListParams
): Promise<GetPaymentListResponse> => {
    try {
        const res = await axios.get(
            'https://golang-container.mnnqf7qoh65t8.us-east-1.cs.amazonlightsail.com/payments/list',
            {
                params: params,
            }
        );
        //@ts-ignore
        return res.data as GetPaymentListResponse;
    } catch (e) {
        return { success: false } as GetPaymentListResponse;
    }
};
