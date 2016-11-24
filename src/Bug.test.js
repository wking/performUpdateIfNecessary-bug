import React from 'react';
import ReactDOM from 'react-dom';
import Bug from './Bug';

it('does not duplicate requests for loaded nodes', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Bug slugs={[7, 7]} />,
    div
  );
});
