const polarToCartesian = (cX, Y, r, Degrees) => {
  const Radians = (Degrees - 90) * Math.PI / 180.0;
  return { x: cX + (r * Math.cos(Radians)), y: Y + (r * Math.sin(Radians)) };
}

export const arc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');

  return d;
}
