import React from 'react';
import { toJpeg } from 'html-to-image';
import saveAs from 'file-saver';

export const downloadReceipt = (
    elementRef: React.RefObject<HTMLElement>,
    name: string
) => {
    if (elementRef.current) {
        toJpeg(elementRef.current, { cacheBust: false })
            .then((dataUrl: string) => {
                const base64String = dataUrl.replace(
                    'data:image/jpeg;base64,',
                    ''
                );

                var byteCharacters = atob(base64String);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var blob = new Blob([byteArray], { type: 'image/png' }); // Specify the appropriate MIME type

                saveAs(blob, name + '.jpeg');
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
