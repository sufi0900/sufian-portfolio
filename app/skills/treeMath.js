// treeMath.js
import { BRANCHES } from "./skillData";

export const V = (x, y) => ({ x, y });
export const sub = (a, b) => V(a.x - b.x, a.y - b.y);
export const norm = (a) => { const l = Math.hypot(a.x, a.y) || 1; return V(a.x / l, a.y / l); };
export const perp = (a) => V(-a.y, a.x);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function makeAspenLeaf(LW, LH, seed) {
  const cx = LW / 2, cy = LH / 2;
  const rx = LW * 0.47;
  const ry = LH * 0.44;
  const skewX = ((seed * 7) % 14) - 7;
  const skewY = ((seed * 13) % 10) - 5;
  const w1 = ((seed * 3) % 8) - 4;
  const w2 = ((seed * 5) % 8) - 4;

  const top    = { x: cx + skewX * 0.4, y: cy - ry + skewY * 0.3 };
  const right  = { x: cx + rx,          y: cy + skewY * 0.2 };
  const bottom = { x: cx - skewX * 0.3, y: cy + ry };
  const left   = { x: cx - rx,          y: cy - skewY * 0.2 };

  const cp1 = { x: cx + rx * 0.72 + w1, y: top.y + (right.y - top.y) * 0.35 };
  const cp2 = { x: right.x - (right.x - bottom.x) * 0.1 + w2, y: cy + ry * 0.55 };
  const cp3 = { x: cx - rx * 0.72 - w1, y: bottom.y - (bottom.y - left.y) * 0.28 };
  const cp4 = { x: left.x + (top.x - left.x) * 0.1 - w2, y: cy - ry * 0.50 };

  return [
    `M ${top.x.toFixed(1)} ${top.y.toFixed(1)}`,
    `C ${cp1.x.toFixed(1)} ${cp1.y.toFixed(1)}, ${cp2.x.toFixed(1)} ${cp2.y.toFixed(1)}, ${bottom.x.toFixed(1)} ${bottom.y.toFixed(1)}`,
    `C ${cp3.x.toFixed(1)} ${cp3.y.toFixed(1)}, ${cp4.x.toFixed(1)} ${cp4.y.toFixed(1)}, ${top.x.toFixed(1)} ${top.y.toFixed(1)}`,
    "Z",
  ].join(" ");
}

export function makeVeinPath(cx, cy, nx, ny) {
  const mx = (cx + nx) / 2;
  const my = (cy + ny) / 2;
  const dx = nx - cx, dy = ny - cy;
  const len = Math.hypot(dx, dy) || 1;
  const px = (-dy / len) * len * 0.18;
  const py = (dx / len) * len * 0.18;
  return `M ${cx.toFixed(1)} ${cy.toFixed(1)} Q ${(mx + px).toFixed(1)} ${(my + py).toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`;
}

export function getNodePositions(count, LW, LH) {
  const cx = LW / 2, cy = LH / 2;
  const rx = LW * 0.38; 
  const ry = LH * 0.33;
  const positions = [];
  const angleStart = -Math.PI * 0.74;
  const angleEnd   =  Math.PI * 0.74;
  const spread     = angleEnd - angleStart;
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const angle = angleStart + t * spread;
    positions.push({
      x: cx + Math.cos(angle) * rx,
      y: cy + Math.sin(angle) * ry,
    });
  }
  return positions;
}

export function makeLimb(base, tip, ctrl, w0, w1) {
  const dB = norm(sub(ctrl, base)), pB = perp(dB);
  const dT = norm(sub(tip, ctrl)), pT = perp(dT);
  const bl = V(base.x + pB.x * w0 / 2, base.y + pB.y * w0 / 2);
  const br = V(base.x - pB.x * w0 / 2, base.y - pB.y * w0 / 2);
  const tl = V(tip.x + pT.x * w1 / 2, tip.y + pT.y * w1 / 2);
  const tr = V(tip.x - pT.x * w1 / 2, tip.y - pT.y * w1 / 2);
  const cl = V(ctrl.x + pB.x * w0 * 0.34, ctrl.y + pB.y * w0 * 0.34);
  const cr = V(ctrl.x - pB.x * w0 * 0.34, ctrl.y - pB.y * w0 * 0.34);
  return `M ${bl.x.toFixed(1)} ${bl.y.toFixed(1)} Q ${cl.x.toFixed(1)} ${cl.y.toFixed(1)} ${tl.x.toFixed(1)} ${tl.y.toFixed(1)} L ${tr.x.toFixed(1)} ${tr.y.toFixed(1)} Q ${cr.x.toFixed(1)} ${cr.y.toFixed(1)} ${br.x.toFixed(1)} ${br.y.toFixed(1)} Z`;
}

export function makeZigzag(base, target, segs, amp, seed) {
  const dir = norm(sub(target, base));
  const p = perp(dir);
  const len = Math.hypot(target.x - base.x, target.y - base.y) || 1;
  const pts = [base];
  for (let s = 1; s <= segs; s++) {
    const t = s / segs;
    const ax = base.x + dir.x * len * t;
    const ay = base.y + dir.y * len * t;
    const sign = s % 2 === 0 ? 1 : -1;
    const k = amp * (1 - t * 0.55) * (((seed * s * 7) % 6) / 5 + 0.45) * sign;
    pts.push(s === segs ? target : V(ax + p.x * k, ay + p.y * k));
  }
  return "M " + pts.map((q) => `${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(" L ");
}

export function buildLayout(W) {
  // CANOPY_H REDUCED FROM 480 TO 340 TO REMOVE TOP GAP
  const CANOPY_H = 340, ROW_H = 380, ROOTS_H = 320;
  const TRUNK_BASE_W = 120;
  const TRUNK_TOP_W  = 16;
  const totalH = CANOPY_H + BRANCHES.length * ROW_H + ROOTS_H;
  const cx = W / 2;
  const reach = clamp(W * 0.24, 200, 360);
  const topY = CANOPY_H - 10;
  const baseY = totalH - ROOTS_H + 6;

  const trunkTop  = V(cx + 6, topY);
  const trunkBase = V(cx, baseY);
  const trunkCtrl = V(cx - 22, (topY + baseY) / 2);
  const trunkPath = makeLimb(trunkBase, trunkTop, trunkCtrl, TRUNK_BASE_W, TRUNK_TOP_W);

  const trunkAt = (y) => {
    const t = clamp((baseY - y) / (baseY - topY), 0, 1);
    const mt = 1 - t;
    const x = mt * mt * trunkBase.x + 2 * mt * t * trunkCtrl.x + t * t * trunkTop.x;
    return V(x, y);
  };
  const trunkWidthAt = (y) => {
    const t = clamp((baseY - y) / (baseY - topY), 0, 1);
    return TRUNK_TOP_W + (TRUNK_BASE_W - TRUNK_TOP_W) * t;
  };

  const boughs = BRANCHES.map((b, i) => {
    const side = i % 2 === 0 ? -1 : 1;
    const bandTop = CANOPY_H + i * ROW_H;
    const attachY = bandTop + ROW_H * 0.66;
    const tipY = bandTop + ROW_H * 0.30;
    const attach = trunkAt(attachY);
    const tip = V(cx + side * reach, tipY);
    const ctrl = V(cx + side * reach * 0.38, attachY - 60);
    const w0 = clamp(trunkWidthAt(attachY) * 0.42, 18, 40);
    const TIP_W = 10;
    const path = makeLimb(attach, tip, ctrl, w0, TIP_W);
    const hiBase = V(attach.x, attach.y - w0 * 0.20);
    const hiCtrl = V(ctrl.x, ctrl.y - w0 * 0.22);
    const hiTip  = V(tip.x, tip.y - 2);
    const highlight = makeLimb(hiBase, hiTip, hiCtrl, w0 * 0.44, 4.5);

    const leafLW = Math.max(680, 580 + b.skills.length * 28);
    const leafLH = 380;
    const outDir = norm(sub(tip, ctrl));
    const op = perp(outDir);
    const twigLen = clamp(reach * 0.42, 150, 200);
    const connect = V(tip.x + side * twigLen, tip.y - 16);

    const mainTwig = makeZigzag(tip, connect, 4, 13, i + 2);
    const forkTwigs = [
      { along: 0.32, k: 0.85 },
      { along: 0.62, k: -0.7 },
    ].map(({ along, k }, fi) => {
      const baseP = V(tip.x + (connect.x - tip.x) * along, tip.y + (connect.y - tip.y) * along);
      const ft = V(baseP.x + side * 26 + op.x * 56 * k, baseP.y + op.y * 56 * k - 8);
      return makeZigzag(baseP, ft, 3, 8, i * 3 + fi + 1);
    });
    const twigs = [mainTwig, ...forkTwigs];

    return { ...b, side, attach, tip, ctrl, path, highlight, twigs, mainTwig, connect, leafLW, leafLH, outDir, attachY, tipY };
  });

  const rootDefs = [
    { dx: -0.82, len: 160, w: 30 }, { dx: -0.52, len: 200, w: 40 },
    { dx: -0.24, len: 230, w: 48 }, { dx: 0.0, len: 250, w: 54 },
    { dx: 0.26, len: 228, w: 48 }, { dx: 0.54, len: 198, w: 40 }, { dx: 0.82, len: 158, w: 30 },
  ];
  const roots = rootDefs.map((r) => {
    const tip = V(cx + r.dx * (reach + 160), baseY + r.len);
    const ctrl = V(cx + r.dx * 80, baseY + r.len * 0.4);
    const hi = makeLimb(trunkBase, V(tip.x, tip.y - r.w * 0.18), V(ctrl.x, ctrl.y - r.w * 0.2), r.w * 0.42, 1.4);
    return { path: makeLimb(trunkBase, tip, ctrl, r.w, 2.5), highlight: hi, tip, dx: r.dx };
  });

  const barks = [-0.34, -0.13, 0.09, 0.28].map((frac) => {
    const pts = [];
    for (let s = 0; s <= 12; s++) {
      const y = topY + ((baseY - topY) * s) / 12;
      const c = trunkAt(y);
      pts.push(V(c.x + frac * trunkWidthAt(y), y));
    }
    return "M " + pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ");
  });

  const makeBolt = (seed, amp) => {
    const pts = [];
    const steps = 16;
    for (let s = 0; s <= steps; s++) {
      const y = baseY - ((baseY - topY) * s) / steps;
      const c = trunkAt(y);
      const w = trunkWidthAt(y);
      const jitter = (((s * seed) % 7) - 3) / 3 * Math.min(amp, w * 0.32);
      pts.push(V(c.x + jitter, y));
    }
    return "M " + pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ");
  };
  const trunkBolts = [makeBolt(7, 14), makeBolt(13, 9)];

  const makeFlow = (seed, amp) => {
    const pts = [];
    const steps = 22;
    for (let s = 0; s <= steps; s++) {
      const y = baseY - ((baseY - topY) * s) / steps;
      const c = trunkAt(y);
      const w = trunkWidthAt(y);
      const wobble = Math.sin(s * 0.7 + seed) * Math.min(amp, w * 0.26);
      pts.push(V(c.x + wobble, y));
    }
    return "M " + pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ");
  };
  const trunkFlows = [makeFlow(0, 18), makeFlow(2.1, 12), makeFlow(4.2, 8)];

  const crownTop = V(cx + 6, Math.max(0, topY - 360));
  const crownHit = V(trunkTop.x, topY);
  const crownMain = makeZigzag(crownTop, crownHit, 12, 35, 5);
  const crownFork1 = makeZigzag(V(cx + 6, topY - 200), V(cx - 80, topY - 80), 5, 22, 9);
  const crownFork2 = makeZigzag(V(cx + 6, topY - 120), V(cx + 90, topY - 20), 5, 20, 13);
  const crownBolt = `${crownMain} ${crownFork1} ${crownFork2}`;

  return { totalH, cx, reach, topY, baseY, trunkPath, trunkAt, trunkWidthAt, boughs, roots, barks, trunkBolts, trunkFlows, crownBolt };
}