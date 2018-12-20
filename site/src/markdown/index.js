import {
  withProps, withHandlers, lifecycle, compose,
} from 'recompose';
import * as React from 'react';
import { render } from 'react-dom';
import * as PropTypes from 'prop-types';
import marked from 'marked';
import Canvas from './canvas';
import trace from '../utils/trace';

import './amblin.css';

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  smartypants: true,
});

const enhance = compose(
  withProps(({ input }) => {
    const snippets = {};
    const newinput = marked(input.replace(/```js\s?([^]+?)```/g, (match, p1, offset) => {
      const id = offset.toString(36);
      snippets[id] = React.createElement(Canvas, { code: p1 });

      return `<div id=${id}></div>`;
    }));


    return {
      html: newinput,
      snippets,
    };
  }),
  trace('markdown'),
  withHandlers({
    renderCanvas: props => () => {
      Object.entries(props.snippets).forEach(([id, snippet]) => {
        const container = document.getElementById(id);
        if (container instanceof HTMLElement) {
          render(snippet, container);
        }
      });
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.renderCanvas();
    },
    componentDidUpdate() {
      this.props.renderCanvas();
    },
  }),
);


const Markdown = ({ html }) => (
  <div
    id="wrapper"
    className="pure-markdown"
    /* eslint-disable react/no-danger */
    dangerouslySetInnerHTML={{
      __html: html,
    }}
    /* eslint-enable react/no-danger */
  />
);

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
};

export default enhance(Markdown);
