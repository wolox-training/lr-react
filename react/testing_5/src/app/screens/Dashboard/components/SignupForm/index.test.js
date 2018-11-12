import Faker from 'faker';
import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../../../../../config/test';

// import { FIELDS } from './constants';

const person = {
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email()
};

describe('Signup Form (use FIELDS constants)', () => {
  let browser;
  let page;

  beforeAll(async () => {}); // start the browser

  beforeEach(async () => {}); // go to root page

  afterAll(() => {}); // close browesr

  it('Can submit signup form', async () => {});

  it('Successful submit', async () => {}, 16000);

  it('3 fields are required', async () => {}, 16000);

  it('First name is required', async () => {}, 16000);

  it('Last name is required', async () => {}, 16000);

  it('Email is required', async () => {}, 16000);
});
