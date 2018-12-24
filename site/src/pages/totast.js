import * as React from 'react';
import docMd from '../docs/totast.md';
import Markdown from '../markdown';

const Totast = () => (
  <div><Markdown input={docMd} /></div>
);

export default Totast;
