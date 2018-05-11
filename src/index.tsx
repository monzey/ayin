import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './index.scss';

const Index = () => {
  return <h1 className={styles.title}>
      Hello React!
    </h1> ;
};

ReactDOM.render(<Index />, document.getElementById("index"));
