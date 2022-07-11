import * as React from 'react';
import {chakra, keyframes, ImageProps, forwardRef, usePrefersReducedMotion} from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logos from '@public/logo.svg';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`;

  return <chakra.img animation={animation} src={logos} ref={ref} {...props} />;
});
