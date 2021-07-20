// Button.stories.js | Button.stories.jsx
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { ModalRemoveQuestion } from '.';
import '../../styles/global.scss';
import { Button } from '../Button';

export default {
  component: ModalRemoveQuestion,
  title: 'Componentes/ModalRemoveQuestion',
  
} as ComponentMeta<typeof ModalRemoveQuestion>;

export const Modal: React.VFC<{}> = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setModalOpened(!modalOpened)}>Open Modal</Button>
      <ModalRemoveQuestion modalIsOpen={modalOpened} setIsOpen={setModalOpened} handleDeleteQuestion={action('deleteQuestion')} />
    </>
  )
};
