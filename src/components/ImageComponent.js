import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

export default function ImageComponent(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div className="App">
      <div className={`${pulsing ? 'pulse' : ''} loadable`}>
        <motion.img
          transition={{ ease: 'easeOut', duration: 1 }}
          initial={({ scale: 0.2 }, { opacity: 0 })}
          style={{ height: imageLoading ? '100%' : 'auto' }}
          animate={{
            y: 0,
            x: 0,
            scale: [0.2, 1],
            height: imageLoading ? '100%' : 'auto',
            opacity: [0, 1],
          }}
          transition={
            ({ scale: { delay: 0, duration: 0.4 } },
            { height: { delay: 0.4, duration: 0.4 } },
            { opacity: { delay: 0, duration: 0.8 } })
          }
          onLoad={imageLoaded}
          width="100%"
          src={props.image}
          className={props.className}
        />
      </div>
    </div>
  );
}
