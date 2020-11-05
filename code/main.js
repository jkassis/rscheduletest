process.stdout.write(`node.version: ${process.version}`);
import { Schedule } from './rschedule.js';
const schedule = new Schedule({
    rrules: [
        {
            frequency: 'YEARLY',
            byMonthOfYear: [2, 6],
            byDayOfWeek: ['SU', ['MO', 3]],
            start: new Date(2010, 1, 7),
        },
        {
            frequency: 'DAILY',
            byDayOfWeek: ['TU'],
            start: new Date(2012, 1, 7),
        },
    ],
    exdates: [new Date(2010, 3, 2)],
});
var occurrences = schedule.occurrences({ take: 10 }).toArray();
process.stdout.write(JSON.stringify(occurrences));
//# sourceMappingURL=main.js.map