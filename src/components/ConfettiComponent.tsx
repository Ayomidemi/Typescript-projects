import * as React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

interface IConfettiComponentProps {
}

const ConfettiComponent: React.FunctionComponent<IConfettiComponentProps> = (props) => {
    const { width, height } = useWindowSize()
  return (
    <>
    <Confetti
      numberOfPieces={10}
      gravity={0.05}
        width={width}
        height={height}
      />
    </>
  );
};

export default ConfettiComponent;
