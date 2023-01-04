import { useEffect, useState, useCallback } from 'react';
import UseRefComponent from './UseRef';

export default function Home() {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  const aUsefulCallback = () => {};
  const memoizedCallback = useCallback(aUsefulCallback, []);
  // memoized so that component isnt re-rendered every single time

  // same ^
  // const memoizedCallback = useMemo(()=>
  // aUsefulCallback, []);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <UseRefComponent cb={memoizedCallback} />
      {/* if cb wasnt memoized, the visual wouldnt render (due to too many rerenders) */}
    </div>
  );
}
