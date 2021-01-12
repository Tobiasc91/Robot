import './App.css';
import {WalkRobot} from './calculate/Walk'
import React, { useState } from 'react';
import {InputTextGridSize, InputTextStartPos, InputTextWalkDir} from './components/InputText';

const App = () => {
  const [showSetup, setShowSetup] = useState(true);
  const [showWalkDirections, setShowWalkDirections] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

  const [gridSize, setGridSize] = useState({ x: 5, y: 5 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0, dir: 'N' });

  const [walkDirections, setWalkDirections] = useState('');
  const [destination, setDestination] = useState('');

  const gridSizeInputs = [
    {
      name: "gridSizeX",
      current: gridSize.x,
      handleChange: (x) => setGridSize({ x, y: gridSize.y })
    },
    {
      name: "gridSizeY",
      current: gridSize.y,
      handleChange: (y) => setGridSize({ x: gridSize.x, y })
    }
  ]
  const startPositionInput = [
    {
      name: "startPosX",
      current: startPos.x,
      handleChange: (x) => setStartPos({ x, y: startPos.y, dir: startPos.dir })
    },
    {
      name: "startPosY",
      current: startPos.y,
      handleChange: (y) => setStartPos({ x: startPos.x, y, dir: startPos.dir })
    },
    {
      name: "startPosDir",
      current: startPos.dir,
      handleChange: (dir) => setStartPos({ x: startPos.x, y: startPos.y, dir })
    },
  ]
  return (
    <div>
      {showSetup && (
        <div className="content">
          <InputTextGridSize
            labelText="Grid size:"
            inputs={gridSizeInputs}
          />
          <InputTextStartPos
            labelText="Start Position:"
            inputs={startPositionInput}
          />
          <button
            className="button"
            type="button"
            onClick={() => {
              setShowSetup(false)
              setShowWalkDirections(true)
            }}>
            Create!
          </button>
        </div>)
      }
      { showWalkDirections && (
        <div className="content">
          <InputTextWalkDir
            labelText="Walk directions:"
            inputs={[{
              name: "Walkdirections",
              current: walkDirections,
              handleChange: (wd) => setWalkDirections(wd)
            }]}
          />
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={() => {
                setShowSetup(false)
                setShowWalkDirections(true)
                setShowDestination(true)
                setDestination(WalkRobot(startPos, walkDirections, gridSize))
              }}>
              Walk!
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                setShowWalkDirections(false)
                setShowDestination(false)
                setShowSetup(true)
              }}>
              Resize grid
              </button>
          </div>
        </div>
      )}
      {showDestination && (
        <div>
          {destination}
        </div>
      )}
    </div>
  );
}

export default App;