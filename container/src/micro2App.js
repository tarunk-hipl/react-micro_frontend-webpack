import { mount } from 'MicroB/micro2App';
import React, { useRef, useEffect } from 'react';
import { store } from './store';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, store);
  }, []);
  return <div id='micro2_app' ref={ref} />;
};