import React from 'react';
import { toJpeg } from 'html-to-image';

export const downloadReceipt = (
    elementRef: React.RefObject<HTMLElement>,
    anchorRef: React.RefObject<HTMLElement>,
    name: string
) => {
    if (elementRef.current) {
        toJpeg(elementRef.current, { cacheBust: false })
            .then((dataUrl) => {
                anchorRef.current?.setAttribute('href', dataUrl);
                anchorRef.current?.setAttribute('download', name + '.jpeg');
                anchorRef.current?.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
