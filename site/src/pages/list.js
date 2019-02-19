import * as React from 'react';
import listMd from '../docs/list.md';
import Markdown from '../markdown';

const List = () => (
  <div>
    <Markdown input={listMd} />
  </div>
);

export default List;
