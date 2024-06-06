import axios from 'axios';
export type GetPaymentDetailsResponse = {
    success: boolean;
    data: {
        date: number;
        receiveFrom: string;
        pan: string;
        address: string;
        sumOfRupees: string;
        userId: string;
        transferNo: string;
        paymentDetailId: number;
        drawnOn: string;
    };
};

export const getPaymentDetails = async (
    paymentDetailId: number
): Promise<GetPaymentDetailsResponse> => {
    try {
        const res = await axios.get(
            `https://golang-container.mnnqf7qoh65t8.us-east-1.cs.amazonlightsail.com/payments/get-details/${paymentDetailId}`
        );
        return res.data as GetPaymentDetailsResponse;
    } catch (e) {
        console.log({ e });
        return { success: false } as GetPaymentDetailsResponse;
    }
};
