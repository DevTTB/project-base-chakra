const ratio = 25;

interface ILineHeights {
  [key: string]: string | number;
}

export const lineHeights: ILineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
};

for (let i = 0; i < 10; i++) {
  lineHeights[i] = `${ratio * i}%`;
}
