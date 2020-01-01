const container = document.querySelector('.container');
const wrap = container.querySelector('.wrapper');
const number = 60;
const radius = 50;
const pi = Math.PI;
const numSlider = document.querySelector('#number');
const radSlider = document.querySelector('#radius');

function toRadians(a) {
  return (a*pi/180);
}


function createKnot(radius, number){


  let baseAngle = 360/number;
  baseAngle = toRadians(baseAngle);
  wrap.innerHTML = ''

  for (let i = 0; i < number; i++) {
    let currentAngle = baseAngle*i;

    let x = radius*(Math.sin(currentAngle) + 2*Math.sin(2*currentAngle));
    let y = radius*(Math.cos(currentAngle) - 2*Math.cos(2*currentAngle));
    let z = -radius*(Math.sin(3*currentAngle));

    let node = document.createElement('div');
    node.className = 'point';
    node.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    wrap.appendChild(node);
  }

}



createKnot(50,60);

function change() {

  createKnot(radSlider.value, numSlider.value);
}