const ratio = 2;

interface ISpace {
  [key: string]: string | number;
}

export const space: ISpace = {
  base: '1px',
};

for (let i = 0; i <= 80; i++) {
  const value = ratio * i;
  space[`sp-${value}`] = `${value}px`;
}
