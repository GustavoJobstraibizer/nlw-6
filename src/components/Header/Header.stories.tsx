// Button.stories.js | Button.stories.jsx
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Header } from '.';
import '../../styles/global.scss';

export default {
  component: Header,
  title: 'Componentes/Header',
  
} as ComponentMeta<typeof Header>;

export const Default: React.VFC<{}> = () => <Header roomId="-10129090" />;

export const WithBtnRoomEnd: React.VFC<{}> = () => <Header roomId="-10129090" showBtnEndRoom />;
