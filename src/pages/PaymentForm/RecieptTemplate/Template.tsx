import { Box, Typography } from '@mui/material';

//@ts-ignore
import Logo from './AdarshwadiLogo.jpg';
//@ts-ignore
import Stamp from './Stamp.png';
//@ts-ignore
import Signature from './Signature.png';
import { forwardRef } from 'react';
import { numToRupeesText } from './numToRupeesText';
import { GetPaymentDetailsResponse } from '../../../api/getPaymentDetails';
import { PartyLogo } from './PartyLogo';

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
                sx={{
                    transform: 'rotate(90deg) scale(0.65)',
                    transformOrigin: 'center center',
                }}
            >
                <Box
                    bgcolor={'#F2FAFF'}
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
                            bgcolor={'#005580'}
                            display={'flex'}
                        >
                            <Box
                                height={180}
                                width={180}
                                border={2}
                                marginLeft={1.5}
                                borderColor={'#005580'}
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
                                <svg
                                    width='90'
                                    height='90'
                                    viewBox='0 0 14 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    style={{
                                        position: 'absolute',
                                        left: 43,
                                        top: 38,
                                    }}
                                >
                                    <g clip-path='url(#clip0_11941_74392)'>
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M3.13903 1.6239C4.16223 0.600706 5.54998 0.0258789 6.997 0.0258789C8.44402 0.0258789 9.83178 0.600706 10.855 1.6239C11.8782 2.6471 12.453 4.03486 12.453 5.48188C12.453 6.33635 12.2526 7.17016 11.8777 7.92044L13.933 11.4809C14.0341 11.656 14.0198 11.8748 13.8967 12.0352C13.7736 12.1956 13.566 12.2661 13.3706 12.2138L11.4716 11.7052L10.963 13.6032C10.9106 13.7986 10.7458 13.9432 10.5453 13.9696C10.3447 13.9959 10.1481 13.899 10.047 13.7238L8.34154 10.7696C7.90571 10.8805 7.45431 10.9379 6.997 10.9379C6.54152 10.9379 6.09191 10.8809 5.65769 10.771L3.95303 13.7238C3.85193 13.8989 3.65532 13.9959 3.45485 13.9696C3.25437 13.9432 3.0895 13.7987 3.03709 13.6034L2.52764 11.7052L0.629414 12.2138C0.434079 12.2661 0.226449 12.1957 0.103336 12.0352C-0.019777 11.8748 -0.0341283 11.656 0.0669734 11.4809L2.11907 7.92601C1.74243 7.17428 1.541 6.33847 1.541 5.48188C1.541 4.03486 2.11583 2.6471 3.13903 1.6239ZM2.72528 8.87608L1.53647 10.9355L2.75159 10.6099C3.01825 10.5384 3.29236 10.6966 3.36391 10.9632L3.69019 12.179L4.69952 10.4306C4.12485 10.1638 3.59564 9.79646 3.13903 9.33985C2.99169 9.19252 2.85365 9.03762 2.72528 8.87608ZM9.29921 10.4284L10.3095 12.1784L10.635 10.9634C10.7065 10.6967 10.9806 10.5384 11.2474 10.6099L12.4636 10.9356L11.2722 8.8717C11.1428 9.03482 11.0036 9.19119 10.855 9.33985C10.3996 9.79521 9.87206 10.1618 9.29921 10.4284ZM7.86472 4.4987L7.14438 3.1247C7.12362 3.08643 7.09197 3.05445 7.053 3.0324C7.01404 3.01034 6.96933 2.99909 6.92395 2.99992C6.87858 3.00075 6.83437 3.01364 6.79633 3.03711C6.7583 3.06058 6.72797 3.0937 6.70879 3.1327L5.98845 4.5067C5.97243 4.54136 5.94701 4.57138 5.91477 4.59369C5.88253 4.616 5.84463 4.6298 5.80493 4.6337L4.20604 4.8537C4.16169 4.8601 4.12009 4.87804 4.08585 4.90552C4.05162 4.933 4.02609 4.96894 4.0121 5.00935C3.99811 5.04976 3.99621 5.09305 4.00662 5.13442C4.01702 5.1758 4.03932 5.21362 4.07104 5.2437L5.25123 6.3167C5.27563 6.34507 5.29225 6.37873 5.29961 6.41467C5.30697 6.45061 5.30484 6.48772 5.29341 6.5227L5.02553 8.03069C5.01603 8.07412 5.01998 8.11922 5.03689 8.16056C5.0538 8.20191 5.08296 8.23773 5.12086 8.26373C5.15875 8.28972 5.20376 8.30478 5.25047 8.30708C5.29717 8.30938 5.34359 8.29883 5.38412 8.2767L6.80793 7.5627C6.84473 7.54696 6.88464 7.53882 6.925 7.53882C6.96537 7.53882 7.00527 7.54696 7.04207 7.5627L8.46589 8.2767C8.50646 8.29944 8.55313 8.31049 8.60022 8.30849C8.6473 8.30649 8.69275 8.29153 8.73101 8.26543C8.76927 8.23934 8.79868 8.20324 8.81566 8.16156C8.83263 8.11987 8.83643 8.0744 8.82659 8.03069L8.59983 6.5227C8.58228 6.49091 8.57311 6.45557 8.57311 6.4197C8.57311 6.38382 8.58228 6.34848 8.59983 6.3167L9.78213 5.2527C9.81602 5.22298 9.84026 5.18471 9.85201 5.14239C9.86376 5.10007 9.86253 5.05544 9.84847 5.01376C9.8344 4.97208 9.80809 4.93506 9.77261 4.90706C9.73714 4.87907 9.69397 4.86124 9.64819 4.8557L8.04824 4.6257C8.00854 4.6218 7.97063 4.608 7.9384 4.58569C7.90616 4.56338 7.88074 4.53336 7.86472 4.4987Z'
                                            fill='#0874AA'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_11941_74392'>
                                            <rect
                                                width='14'
                                                height='14'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
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
                                    borderColor={'#005580'}
                                    bgcolor={'#ffffff'}
                                    display={'flex'}
                                    position={'relative'}
                                >
                                    <Box
                                        width={50}
                                        bgcolor={'#005580'}
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
                                color={'#005580'}
                                fontWeight={'bold'}
                                fontFamily={'arial'}
                                position={'relative'}
                            >
                                <img
                                    src={Stamp}
                                    width={170}
                                    style={{
                                        position: 'absolute',
                                        top: -40,
                                        left: 260,
                                    }}
                                />
                                <img
                                    src={Signature}
                                    width={170}
                                    style={{
                                        position: 'absolute',
                                        top: -40,
                                        left: 260,
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
