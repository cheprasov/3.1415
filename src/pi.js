export const pi = (count = 0) => {
    let result = '';

    if (count <= 0) {
        return result;
    }

    let i = 0n;
    let k = 2n;
    let a = 4n;
    let b = 1n;
    let a1 = 12n;
    let b1 = 4n;

    while (true) {
        const p = k * k;
        const q = 2n * k + 1n;
        k += 1n;

        const na = a1;
        const nb = b1;
        const na1 = p * a + q * a1;
        const nb1 = p * b + q * b1;

        a = na;
        b = nb;
        a1 = na1;
        b1 = nb1;

        let d = a / b;
        let d1 = a1 / b1;

        while (d === d1) {
            result += d.toString();
            if (result.length >= count) {
                return result;
            }

            if (i === 0n) {
                result += '.';
                if (result.length >= count) {
                    return result;
                }
            }

            a = 10n * (a % b);
            a1 = 10n * (a1 % b1);

            d = a / b;
            d1 = a1 / b1;

            i += 1n;
        }
    }
};
