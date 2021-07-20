// Button.stories.js | Button.stories.jsx
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ToggleTheme } from '.';
import '../../styles/global.scss';

export default {
  component: ToggleTheme,
  title: 'Componentes/ToggleTheme',
  
} as ComponentMeta<typeof ToggleTheme>;

export const Default: React.VFC<{}> = () => <ToggleTheme />;
