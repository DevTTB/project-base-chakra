const ratio = 0.1;

interface ILetterSpacing {
  [key: string]: string | number;
}

export const letterSpacings: ILetterSpacing = {
  tighter: '-0.4px',
  tight: '-0.6px',
  normal: '0',
  wide: '0.4px',
  wider: '0.6px',
  widest: '0.8px',
};

for (let i = 0; i <= 10; i++) {
  letterSpacings[i] = `${ratio * i}px`;
}
