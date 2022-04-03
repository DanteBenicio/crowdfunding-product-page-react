import { BackThisProjectModalCardProps, CardContent } from '../../../types/card';

export const cardContent1: CardContent = {
  name: 'Bamboo Stand',
  pledgePrice: 25,
  description: `
    You get an ergonomic stand made of natural bamboo.
    You've helped us launch our promotional campaign, and you’ll
    be added to a special Backer member list.
  `,
  daysLeft: 101,
};

export const cardContent2: CardContent = {
  name: 'Black Edition Stand',
  pledgePrice: 75,
  description: `
    You get a Black Special Edition computer stand and a personal thank you.
    You’ll be added to our Backer member list. Shipping is included.
  `,
  daysLeft: 64,
};

export const cardContent3: CardContent = {
  name: 'Mahogany Special Edition',
  pledgePrice: 200,
  description: `
    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
    You’ll be added to our Backer member list. Shipping is included.
  `,
  daysLeft: 0,
  outOfStock: true,
};

export const cardContentNoReward: BackThisProjectModalCardProps = {
  name: 'Pledge with no reward',
  pledgePrice: 0,
  description: `
    Choose to support us without a reward if you simply believe in our project.
    As a backer, you will be signed up to receive product updates via email.
  `,
  daysLeft: 0,
  noReward: true,
};
