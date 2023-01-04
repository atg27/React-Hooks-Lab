import { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });
  // only getting one rerender instead of 2; synchronously after render function ends layoutEffect runs

  return (
    <div>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // this is basically saying "force update"
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
