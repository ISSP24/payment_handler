import { Box, BoxProps } from '@mui/material';

export interface SectionProps extends BoxProps {}

export const Section = (props: SectionProps) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                maxWidth: '500px',
                width: '100%',
                height: '100dvh',
                bgcolor: '#ffffff',
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'hidden',
                ...sx,
            }}
            {...other}
        />
    );
};
