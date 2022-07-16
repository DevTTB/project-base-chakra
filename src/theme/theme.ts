import {extendTheme} from '@chakra-ui/react';
import {color} from './color';
import {letterSpacings} from './letter_spacings';
import {lineHeights} from './line_heights';
import {fontWeights} from './font_weights';
import {fontSizes} from './font_sizes';
import {radii} from './radii';
import {breakpoints} from './breakpoints';
import {zIndex} from './z_indexs';
import {space} from './space';
import {sizes} from './sizes';
import {fonts} from './fonts';

export const themeCustom = extendTheme({
  color,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  breakpoints,
  radii,
  zIndex,
  sizes,
});
