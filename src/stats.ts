import { statsIcons } from './icons';

export type StatName = keyof typeof statsIcons;
export type Stat = Uncapitalize<StatName>;
export type Range = [number, number];

export interface StatData<T extends StatName> {
  readonly name: Capitalize<T>;
  readonly icon: typeof statsIcons[T];
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly missingNoRange: Range;
  readonly isPercentage?: boolean;
}

const makeStatData = <T extends StatName>({missingNoRange, ...data}: Omit<StatData<T>, 'icon'>): StatData<T> => ({
  icon: statsIcons[data.name],
  ...data,
  get missingNoRange() {
    return [...missingNoRange] as Range;
  }
});

const statsData: { readonly [K in Stat]: StatData<Capitalize<K>>; } = {
  might: makeStatData({
    name: 'Might',
    min: -1.2,
    max: 3,
    missingNoRange: [-1.2, 1],
    isPercentage: true,
  }),
  armor: makeStatData({
    name: 'Armor',
    min: -3,
    max: 5,
    missingNoRange: [0, 2],
  }),
  maxHealth: makeStatData({
    name: 'MaxHealth',
    min: -4,
    max: 250,
    missingNoRange: [-3, 97],
  }),
  recovery: makeStatData({
    name: 'Recovery',
    min: -0.5,
    max: 2,
    missingNoRange: [-0.5, 1],
    step: 0.1,
  }),
  cooldown: makeStatData({
    name: 'Cooldown',
    min: -1.3,
    max: 2,
    missingNoRange: [-1.3, 2],
  }),
  area: makeStatData({
    name: 'Area',
    min: -1.4,
    max: 3,
    missingNoRange: [-1.4, 2.6],
    isPercentage: true,
  }),
  speed: makeStatData({
    name: 'Speed',
    min: -1.2,
    max: 2,
    missingNoRange: [-1.2, 0.8],
    isPercentage: true,
  }),
  duration: makeStatData({
    name: 'Duration',
    min: -1.3,
    max: 2,
    missingNoRange: [-1.3, 1.7],
    isPercentage: true,
  }),
  amount: makeStatData({
    name: 'Amount',
    min: 0,
    max: 3,
    missingNoRange: [0, 2],
  }),
  moveSpeed: makeStatData({
    name: 'MoveSpeed',
    min: -3,
    max: 2,
    missingNoRange: [-2, 0],
    isPercentage: true,
  }),
  magnet: makeStatData({
    name: 'Magnet',
    min: -.9,
    max: 2,
    missingNoRange: [-.2, 1.8],
    isPercentage: true,
  }),
  luck: makeStatData({
    name: 'Luck',
    min: -1.2,
    max: 1.5,
    missingNoRange: [-1.2, 0.8],
    isPercentage: true,
  }),
  growth: makeStatData({
    name: 'Growth',
    min: -2,
    max: 3,
    missingNoRange: [-1.2, 0.8],
    isPercentage: true,
  }),
  greed: makeStatData({
    name: 'Greed',
    min: -1.2,
    max: 3,
    missingNoRange: [-1.2, 0.8],
    isPercentage: true,
  }),
  curse: makeStatData({
    name: 'Curse',
    min: -1.05,
    max: 1,
    missingNoRange: [-1.05, .95],
    isPercentage: true,
  }),
  revival: makeStatData({
    name: 'Revival',
    min: -1,
    max: 4,
    missingNoRange: [0, 2],
  }),
  reroll: makeStatData({
    name: 'Reroll',
    min: -5,
    max: 10,
    missingNoRange: [0, 0],
  }),
  skip: makeStatData({
    name: 'Skip',
    min: -10,
    max: 10,
    missingNoRange: [0, 0],
  }),
  banish: makeStatData({
    min: -5,
    max: 10,
    name: 'Banish',
    missingNoRange: [0, 0],
  }),
};

export default statsData;