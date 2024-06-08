const digitsMap: any = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
};
const tensMap: any = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
};
const getTwoDigitsInWords = (num: number) => {
    if (num === 0) {
        return '';
    }
    if (num in tensMap) {
        return tensMap[num];
    } else {
        return digitsMap[Math.floor(num / 10)] + ' ' + tensMap[num % 10];
    }
};
const placesMap: any = ['thousand', 'lakh', 'crore', 'hundred crore'];

export function numToRupeesText(n: number) {
    let res = getTwoDigitsInWords(n % 100);
    n = Math.floor(n / 100);
    res = (n % 10 ? tensMap[n % 10] + ' hundred ' : '') + res;
    n = Math.floor(n / 10);
    for (let i = 0; i < 4; i++) {
        res =
            (n % 100
                ? getTwoDigitsInWords(n % 100) + ' ' + placesMap[i] + ' '
                : '') + res;

        n = Math.floor(n / 100);
    }
    return res + ' rupees only';
}

// Example usage:
