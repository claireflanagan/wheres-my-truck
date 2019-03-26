import { Chance } from 'chance';
import { addTruck } from './src/actions/trucks';
import { createIssue } from './src/actions/issues';
import { addMaintenance } from './src/actions/maintenances';

const chance = Chance();

async function seed() {
  const truckIds = await Promise.all([...Array(10)]
    .map(() => ({
      name: chance.name(),
      location: chance.address(),
      vin: chance.guid(),
      plates: chance.string({ length: 6 }),
      year: chance.year(),
      make: chance.animal(),
      model: chance.animal(),
      tireSize: chance.integer({ min: 1, max: 30 }),
      boughtDate: chance.date({ year: 2017 }),
      registration: 'https://firebasestorage.googleapis.com/v0/b/dudewheresmytruck-f2b38.appspot.com/o/registration%2Fdmv.gif?alt=media&token=6ac7d745-2c3b-44f1-9116-5cdc76b19337',
      insurance: 'https://firebasestorage.googleapis.com/v0/b/dudewheresmytruck-f2b38.appspot.com/o/insurance%2Fins.png?alt=media&token=5bc37a9d-e9de-42be-9813-fb70924342b0'
    }))
    .map(addTruck));

  // const issueIds = await Promise.all([...Array(100)].map(() => ({
  //   reportedDate: chance.date({ year: 2018 }),
  //   user: chance.string({ length: 10 }),
  //   description: chance.paragraph(),
  //   resolvedDate: chance.pickone([chance.date({ year: 2019 }), null]),
  //   truck: chance.pickone(truckIds)
  // }))
  //   .map(createIssue));

  // await Promise.all([...Array(100)]
  //   .map(() => ({
  //     startDate: chance.date({ year: 2018 }),
  //     user: chance.string({ length: 10 }),
  //     truck: chance.pickone(truckIds),
  //     levelOfUrgency: chance.pickone(['Very Urgent', 'Moderately Urgent', 'Not Urgent', 'Unknown']),
  //     type: chance.pickone(['Routine', 'Corrective']),
  //     reportedDate: chance.date({ year: 2019 }),
  //     descriptionOfMaintenancePerformed: {
  //       description: chance.paragraph(),
  //       receipt: chance.word(),
  //       cost: chance.floating({ fixed: 2, min: 0 }),
  //       garage: chance.string()
  //     },
  //     issueOpen: true,
  //     issue: chance.pickone(issueIds)
  //   }))
  //   .map(addMaintenance));
}

seed()
  .then(() => console.log('done'))
  .catch(console.error);
