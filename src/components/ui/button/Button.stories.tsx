import React from 'react';
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Primary = {
  args:{
    children:'Primary',
    variant:"primary",
  },
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Outline = {
  args:{
    children:'Outline',
    variant:'outline',
    className:"\"bg-red\""
  },
};

export const Custom = {
  args:{
    children:'Custom',
    variant:'custom',
    variantCustom:"bg-blue-500 text-white hover:bg-red-600",
  },
};

export const Loading = {
  args:{
    children:'Loading...',
    loading:true,
    variant:"secondary",
    size:"md"
  },
};

export const Sizes = {
  args:{
    children:'Button',
    size:"lg"
  },
  render:(args: any) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
