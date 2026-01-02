import { renderPi } from './renderPi.js';
import fs from 'fs';
import path from 'path';
import { exit } from 'process';

const __dirname = path.dirname(process.argv[1]);

const initDate = new Date('2026-01-04 12:00:00');
const today = new Date();

if (today.getTime() <= initDate.getTime()) {
    exit(0);
}

if (renderPi(initDate, today)) {
    const fileName = path.resolve(__dirname, '..', 'git-cron.log');
    fs.writeFileSync(fileName, today.toISOString() , { encoding: 'utf-8' });
}

exit(0);