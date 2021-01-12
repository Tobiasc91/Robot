export const RotateRobot = (direction, currentDirection) => {
  if (direction !== 'L' && direction !== 'R') {
    return "Invalid rotation";
  }
  switch (currentDirection) {
    case 'W':
      return direction === 'L' ? 'S' : 'N';
    case 'N':
      return direction === 'L' ? 'W' : 'E';
    case 'E':
      return direction === 'L' ? 'N' : 'S';
    case 'S':
      return direction === 'L' ? 'E' : 'W';
    default:
      return "Invalid current direction";
  }
}

export const WalkRobot = (startPos, walkDirections, gridSize) => {
  let currentDirection = startPos.dir;
  let currentX = startPos.x;
  let currentY = startPos.y;
  for (let i = 0; i < walkDirections.length; i += 1) {
    let dir = walkDirections.toUpperCase().charAt(i);
    switch (dir) {
      case 'L': // Fallthrough
      case 'R':
        currentDirection = RotateRobot(dir, currentDirection);
        break;
      case 'F':
        switch (currentDirection) {
          case 'N':
            currentY--;
            break;
          case 'S':
            currentY++;
            break;
          case 'W':
            currentX--;
            break;
          case 'E':
            currentX++;
            break;
          default:
            return "Invalid input";
        }
        break;
      default:
        return "Invalid input";
    }
    if (currentX < 0 || currentX >= gridSize.x ||
      currentY < 0 || currentY >= gridSize.y) {
      return "Out of bounds";
    }
  }
  return currentX + ' ' + currentY + ' ' + currentDirection;
}