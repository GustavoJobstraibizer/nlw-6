// Button.stories.js | Button.stories.jsx
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { RoomCode } from '.';
import '../../styles/global.scss';

export default {
  component: RoomCode,
  title: 'Componentes/RoomCode',
  
} as ComponentMeta<typeof RoomCode>;

export const Default: React.VFC<{}> = () => <RoomCode code="-10129090" />;
