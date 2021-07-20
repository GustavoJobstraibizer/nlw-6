// Button.stories.js | Button.stories.jsx
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from '.';
import '../../styles/global.scss';

export default {
  component: Button,
  title: 'Componentes/Button',
} as ComponentMeta<typeof Button>;

export const Default: React.VFC<{}> = () => <Button type="button">Entrar na sala</Button>;

export const IsOutlined: React.VFC<{}> = () => <Button type="submit" isOutlined>Entrar na sala</Button>;

export const Disabled: React.VFC<{}> = () => <Button type="button" disabled>Entrar na sala</Button>;

export const DisabledOutline: React.VFC<{}> = () => <Button type="button" isOutlined disabled>Entrar na sala</Button>;