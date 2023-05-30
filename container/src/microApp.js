import { mount } from 'MicroA/microApp';
import React, { useRef, useEffect } from 'react';
import { store } from './store';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, store);
  }, []);
  return <div id='micro1_app' ref={ref} />;
};