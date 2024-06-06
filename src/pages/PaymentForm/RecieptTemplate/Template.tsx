import { Box, Typography } from '@mui/material';

//@ts-ignore
import Logo from './AdarshwadiLogo.jpg';
//@ts-ignore
import Signature from './Signature.png';
import { forwardRef } from 'react';
import { numToRupeesText } from './numToRupeesText';
import { GetPaymentDetailsResponse } from '../../../api/getPaymentDetails';

export const Template = forwardRef<
    HTMLElement,
    GetPaymentDetailsResponse['data']
>(function (props, ref) {
    const {
        date,
        paymentDetailId,
        receiveFrom,
        pan,
        address,
        sumOfRupees,
        transferNo,
        drawnOn,
    } = props ?? ({} as GetPaymentDetailsResponse['data']);

    const sumOfRupeesStr = numToRupeesText(Number(sumOfRupees));
    return (
        <>
            <Box
                bgcolor={'#FAEBD9'}
                height={'1000px'}
                width={'1500px'}
                boxSizing={'border-box'}
                border={16}
                borderColor={'#DEDEDE'}
                display={'flex'}
                fontFamily={'TimesNewRoman'}
                ref={ref}
            >
                <Box
                    bgcolor={'#FAEBD9'}
                    boxSizing={'border-box'}
                    border={4}
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    borderColor={'#826696'}
                >
                    <Box
                        bgcolor={'#FAEBD9'}
                        boxSizing={'border-box'}
                        border={4}
                        display={'flex'}
                        width={'100%'}
                        borderColor={'#FFFFFF'}
                    >
                        <Box
                            width={'100%'}
                            height={120}
                            bgcolor={'#D13232'}
                            display={'flex'}
                        >
                            <Box
                                height={180}
                                width={180}
                                border={2}
                                marginLeft={1.5}
                                borderColor={'#D13232'}
                                borderRadius={100}
                                marginTop={1.5}
                                marginRight={3}
                                bgcolor={'#ffffff'}
                                position={'relative'}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                    viewBox='0 0 290 290'
                                >
                                    <path
                                        id='SunCatcherStudio'
                                        fill='none'
                                        stroke='none'
                                        d='M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z'
                                    />
                                    <text
                                        font-size='30'
                                        fill='#19018c'
                                        letter-spacing='-1'
                                        font-family='sans-serif'
                                        font-weight='bold'
                                    >
                                        <textPath
                                            xlinkHref='#SunCatcherStudio'
                                            startOffset='60'
                                        >
                                            INDIAN SWARNA
                                        </textPath>
                                    </text>
                                </svg>
                                <img
                                    src={Logo}
                                    style={{
                                        position: 'absolute',
                                        left: 32,
                                        top: 67,
                                        width: 110,
                                        borderRadius: 8,
                                    }}
                                />
                                <svg
                                    viewBox='0 0 290 290'
                                    width={180}
                                    height={180}
                                    style={{
                                        position: 'absolute',
                                        top: 32,
                                        left: -17,
                                    }}
                                >
                                    <text
                                        font-size='30'
                                        fill='#19018c'
                                        font-family='sans-serif'
                                        font-weight='bold'
                                    >
                                        <textPath
                                            xlinkHref='#curve'
                                            startOffset='20'
                                        >
                                            SAMAJ PARTY
                                        </textPath>
                                    </text>
                                    <path
                                        id='curve'
                                        d='M 60 170 A 150 150 0 0 0 300 150'
                                        fill='none'
                                    />
                                </svg>
                            </Box>
                            <Typography
                                fontSize={75}
                                component={'span'}
                                color={'#FFFFFF'}
                                fontFamily={'serif'}
                                fontWeight={'bold'}
                            >
                                INDIAN SWARNA SAMAJ PARTY
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        width={'100%'}
                        px={4}
                        display={'flex'}
                        flexDirection={'column'}
                        gap={4}
                    >
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={'column'}
                            marginBottom={2}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                }}
                                fontSize={32}
                                marginBottom={3}
                            >
                                Reg. No. : 56/214/2013-2014/PPS-I
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                3rd floor building number - 73/75, vitthalwadi,
                                Kalbadevi road, mumbai 400002
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                E-mail : indianswarnasamajpartyhq@gmail.com
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Receipt No. :
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                    fontWeight: '800',
                                }}
                                left={190}
                            >
                                {paymentDetailId}
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Date : ___________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={1111}
                            >
                                {date}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Received with thanks from Mr./Mrs./Ms.
                                ___________________________________________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={580}
                            >
                                {receiveFrom}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                PAN : _______________________ Address
                                _________________________________________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={150}
                            >
                                {pan}
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 2.25,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={8}
                                top={-20}
                            >
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; {address}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                _____________________________________________________________________________________
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                the sum of Rupees
                                _____________________________________________________________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={270}
                            >
                                {sumOfRupeesStr}
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={32}
                            >
                                Towards ELECTION FUND by Cash / Cheque /
                                Transfer No.
                                _________________________________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={800}
                            >
                                {transferNo}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            position={'relative'}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={32}
                            >
                                Drawn on
                                ____________________________________________________________________________________
                            </Typography>
                            <Typography
                                position={'absolute'}
                                style={{
                                    fontSize: 28,
                                    lineHeight: 1,
                                    fontFamily: 'sans-serif',
                                    fontStyle: 'italic',
                                }}
                                left={170}
                            >
                                {drawnOn}
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'end'}
                        >
                            <Box>
                                <Box
                                    height={70}
                                    width={350}
                                    border={3}
                                    borderColor={'#D13232'}
                                    bgcolor={'#ffffff'}
                                    display={'flex'}
                                    position={'relative'}
                                >
                                    <Box
                                        width={50}
                                        bgcolor={'#D13232'}
                                        height={'68px'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        fontFamily={'sarif'}
                                    >
                                        <Typography
                                            fontSize={60}
                                            lineHeight={'60px'}
                                            color={'#FFFFFF'}
                                        >
                                            ₹
                                        </Typography>
                                    </Box>
                                    <Typography
                                        position={'absolute'}
                                        style={{
                                            fontSize: 28,
                                            lineHeight: 1,
                                            alignSelf: 'center',
                                            fontFamily: 'sans-serif',
                                        }}
                                        left={70}
                                    >
                                        {new Intl.NumberFormat().format(
                                            Number(sumOfRupees)
                                        )}
                                        /-
                                    </Typography>
                                </Box>
                                <Typography fontSize={24} color={'#19018c'}>
                                    *Subjet to realization of cheque.
                                </Typography>
                            </Box>
                            <Typography
                                fontSize={32}
                                color={'#D13232'}
                                fontWeight={'bold'}
                                fontFamily={'arial'}
                                position={'relative'}
                            >
                                <img
                                    src={Signature}
                                    width={170}
                                    style={{
                                        position: 'absolute',
                                        top: -75,
                                        left: 120,
                                    }}
                                />
                                For, Indian Swarna Samaj Party
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            marginTop={-3}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'arial',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={26}
                            >
                                PAN : AACAI0784Q
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            marginTop={-3}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'arial',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={26}
                            >
                                This Fund is Eligible for exception under Income
                                Tax Act 1961 u/s 80 GGC / 80 GGB
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
});
