import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const Hexagon = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * Math.sqrt(3)}px;
  background-image: url(${props => props.image});
  background-size: ${props => props.bgWidth}px ${props => props.bgHeight}px;
  background-position: ${props => props.bgX}px ${props => props.bgY}px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateY(${props => (props.flipped ? 180 : 0)}deg);
  transition: transform 1s;
`;

const HexagonBack = styled(Hexagon)`
  transform: rotateY(${props => (props.flipped ? 0 : -180)}deg);
`;

const HexagonContainer = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size * Math.sqrt(3)}px;
  transform: translate(${props => props.x}px, ${props => props.y}px);
  perspective: 1000px;
  
`;

const HexagonalFlipEffect = ({
  initialImage,
  revealImage,
  hexagonSize = 100,
}) => {
  const [flipped, setFlipped] = useState([]);
  const hexagonHeight = hexagonSize * Math.sqrt(3);
  const columns = Math.ceil(window.innerWidth / hexagonSize) + 1;
  const rows = Math.ceil(window.innerHeight / hexagonHeight) + 1;

  useEffect(() => {
    const totalHexagons = rows * columns;
    const newFlipped = Array.from({ length: totalHexagons }).map((_, i) => false);

    // Start flipping hexagons from top-left to bottom-right
    newFlipped.forEach((_, i) => {
      const row = Math.floor(i / columns);
      const col = i % columns;
      setTimeout(() => {
        setFlipped(flipped => {
          const newState = [...flipped];
          newState[i] = true;
          return newState;
        });
      }, (row + col) * 100); // Adjust timing for the desired animation effect
    });
  }, [columns, rows]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${columns * hexagonSize}px`,
        height: `${rows * hexagonHeight}px`,
      }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const x = col * hexagonSize - (row % 2) * hexagonSize / 2;
          const y = row * hexagonHeight / 2;
          const index = row * columns + col;
          const delay = (row + col) * 0.1; // Delay for top-left to bottom-right effect

          return (
            <HexagonContainer key={`${row}-${col}`} size={hexagonSize} x={x} y={y}>
              <Hexagon
                image={initialImage}
                size={hexagonSize}
                bgWidth={columns * hexagonSize}
                bgHeight={rows * hexagonHeight}
                bgX={-x}
                bgY={-y}
                delay={delay}
                flipped={flipped[index]}
              />
              <HexagonBack
                image={revealImage}
                size={hexagonSize}
                bgWidth={columns * hexagonSize}
                bgHeight={rows * hexagonHeight}
                bgX={-x}
                bgY={-y}
                delay={delay}
                flipped={flipped[index]}
              />
            </HexagonContainer>
          );
        })
      )}
    </div>
  );
};

export default HexagonalFlipEffect;