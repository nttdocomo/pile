import * as React from 'react';
import docMd from '../docs/toast.md';
import Markdown from '../markdown';

const Toast = () => (
  <div><Markdown input={docMd} /></div>
);

export default Toast;
