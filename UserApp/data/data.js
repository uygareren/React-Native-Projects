import { faker } from '@faker-js/faker';

let counter = 1;


const userDataSet = Array(20).fill(null).map(() => ({


  id: counter++,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  isOnline: faker.datatype.boolean(),
}));

export default userDataSet;
