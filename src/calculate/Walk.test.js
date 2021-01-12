import * as robot from './Walk.js'

const rotateLeft = 'L';
const rotateRight = 'R';
let currentDirection = 'N';
test('rotateRobotLeft', () => {
  currentDirection = robot.rotateRobot(rotateLeft, currentDirection);
  expect(currentDirection).toBe('W');
  currentDirection = robot.rotateRobot(rotateLeft, currentDirection);
  expect(currentDirection).toBe('S');
  currentDirection = robot.rotateRobot(rotateLeft, currentDirection);
  expect(currentDirection).toBe('E');
  currentDirection = robot.rotateRobot(rotateLeft, currentDirection);
  expect(currentDirection).toBe('N');
})

test('rotateRobotRight', () => {
  currentDirection = 'S';
  currentDirection = robot.rotateRobot(rotateRight, currentDirection);
  expect(currentDirection).toBe('W');
  currentDirection = robot.rotateRobot(rotateRight, currentDirection);
  expect(currentDirection).toBe('N');
  currentDirection = robot.rotateRobot(rotateRight, currentDirection);
  expect(currentDirection).toBe('E');
  currentDirection = robot.rotateRobot(rotateRight, currentDirection);
  expect(currentDirection).toBe('S');
})

const gridSize5x5 = {x: 5, y:5};
const gridSize2x2 = {x: 2, y:2};

test('walkRobot no direction', () => {
  const startPos =  { x: 0, y: 0, dir: 'N' }
  const walkDirections = '';
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('0 0 N');
})

test('walkRobot forward only', () => {
  const startPos =  { x: 0, y: 0, dir: 'S' }
  const walkDirections = "FFF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('0 3 S');
})

test('walkRobot out of bounds', () => {
  const startPos =  { x: 0, y: 0, dir: 'N' }
  const walkDirections = "F";
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('Out of bounds');
})

test('walkRobot example 1', () => {
  const startPos =  { x: 1, y: 2, dir: 'N' }
  const walkDirections = "RFRFFRFRF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('1 3 N');
})

test('walkRobot example 2', () => {
  const startPos =  { x: 0, y: 0, dir: 'E' }
  const walkDirections = "RFLFFLRF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('3 1 E');
})

test('walkRobot Invalid input', () => {
  const startPos =  { x: 0, y: 0, dir: 'E' }
  const walkDirections = "RFXLFFLRF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize5x5)).toEqual('Invalid input');
})

test('walkRobot Small grid OOB', () => {
  const startPos =  { x: 0, y: 0, dir: 'E' }
  const walkDirections = "FF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize2x2)).toEqual('Out of bounds');
})

test('walkRobot Small grid round', () => {
  const startPos =  { x: 0, y: 0, dir: 'E' }
  const walkDirections = "FRFRFRF";
  expect(robot.walkRobot(startPos, walkDirections, gridSize2x2)).toEqual('0 0 N');
})
