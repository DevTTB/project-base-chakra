const ratio = 2;

export interface IRadius {
  [key: string]: string | number;
}

export const radii: IRadius = {
  none: '0',
  base: '1px',
  half: '50%',
  full: '9999px',
};

for (let i = 0; i <= 10; i++) {
  const value = ratio * i;
  radii[`radi-${value}`] = `${value}px`;
}
