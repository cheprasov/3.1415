import { pixelChars } from './pixelChars.js';
import { pi } from './pi.js';

const DAY_MS = 86_400_000;
const HALF_DAY_MS = 43_200_000;

export const renderPi = (initDate, today) => {
    const initTs = Math.floor(initDate.getTime() / DAY_MS) * DAY_MS + HALF_DAY_MS;
    const todayTs = Math.floor(today.getTime() / DAY_MS) * DAY_MS + HALF_DAY_MS;

    const passedDays = Math.floor((todayTs - initTs) / DAY_MS);

    const minCharDays = pixelChars.chars['.'].days;
    const piCount = 1 + Math.ceil(passedDays / minCharDays);
    const piStr = pi(piCount);

    let long = 0;
    for (let i = 0; i < piStr.length; i += 1) {
        const c = piStr[i];
        const chr = pixelChars.chars[c];
        if (long + chr.days <= passedDays) {
            long += chr.days;
            continue;
        }
        const rest = passedDays - long;
        const y = Math.floor(rest / 7);
        const x = Math.abs(6 - (rest % 7) + 1) % 7;
        return chr.data[y][x];
    }
};
