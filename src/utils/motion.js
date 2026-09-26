// Spring Solver & Dynamic Fluid Engine
export class SpringSolver {
  constructor({ tension = 90, friction = 26, mass = 1, clamp = false } = {}) {
    this.tension = tension;
    this.friction = friction;
    this.mass = mass;
    this.clamp = clamp;
  }

  step(current, target, velocity, dt = 0.016) {
    let x = current;
    let v = velocity;
    const force = -this.tension * 1e-6 * (x - target);
    const damping = -this.friction * 1e-3 * v;
    const a = (force + damping) / this.mass;
    v += a * (dt * 1000);
    x += v * (dt * 1000);

    const isResting = Math.abs(v) < 0.00001 && Math.abs(x - target) < 0.01;
    return { value: isResting ? target : x, velocity: v, isResting };
  }
}

export const applyViewportGrid = () => {
  const FONT_BASE = 16, BASE_WIDTH = 1440, COEF = 0.6666;
  const width = window.innerWidth;
  if (width > BASE_WIDTH) {
    const widthReduction = ((BASE_WIDTH - width) / BASE_WIDTH) * 100;
    const computedSize = FONT_BASE - (FONT_BASE * widthReduction * COEF) / 100;
    document.documentElement.style.setProperty("font-size", `${computedSize}px`);
  } else {
    document.documentElement.style.removeProperty("font-size");
  }
};