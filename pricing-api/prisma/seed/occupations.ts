import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { finished } from 'stream/promises';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const processFile = async () => {
  const records = [];
  const parser = createReadStream('prisma/seed/occupations.csv').pipe(
    parse({}),
  );

  parser.on('readable', function () {
    let record;
    while ((record = parser.read())) {
      records.push(record);
    }
  });

  await finished(parser);
  return records;
};

(async () => {
  const records = await processFile();
  records.forEach(async record => {
    const codeTreated = parseInt(record[0], 10);
    const activeTreated =
      record[2] !== 'Active' && JSON.parse(record[2].toLowerCase());
    const factor = parseFloat(record[3]);
    try {
      if (record[2] !== 'Active') {
        await prisma.occupations.create({
          data: {
            name: record[1],
            code: codeTreated,
            active: activeTreated,
            factor,
          },
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  });
  console.info(records);
})();
