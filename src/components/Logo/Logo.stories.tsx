// Button.stories.js | Button.stories.jsx
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Logo } from '.';
import '../../styles/global.scss';

export default {
  component: Logo,
  title: 'Componentes/Logo',
  
} as ComponentMeta<typeof Logo>;

export const Default: React.VFC<{}> = () => <Logo />;
