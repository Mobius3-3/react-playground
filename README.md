# React Rerender & useMemo / useCallback Playground

A small interactive playground that demonstrates:
1. Why and when React rerenders components.
2. How to use `useMemo` and `useCallback` to avoid unnecessary rerenders and preserve stable identities.

---

## Short conceptual cheatsheet

- React rerenders when:
  - State or props change.
  - Parent rerenders (children render by default).
  - Context value changes.
- Reduce unnecessary rerenders:
  - Wrap pure child components with `React.memo`.
  - Use `useMemo` to memoize expensive values or to keep object/array references stable.
  - Use `useCallback` to memoize functions passed as props.
  - Move expensive work out of render (useMemo, web worker, or triggered actions).

---

## Quick start (Linux)

```bash
npm install
npm start
# open http://localhost:3000
```

## What this repo shows (high level)

- React rerender behavior:
  - Parent state/props changes cause child renders.
  - `React.memo` prevents rerenders when props are shallowly equal.
  - Context updates can trigger subtree rerenders.
  - See the rerender demos in `src/App1.js` (counters, decoration components, context example).

- `useMemo` and `useCallback` usage:
  - `useMemo` caches expensive computations or stable objects (arrays/objects) so children don't receive new references each render.
  - `useCallback` caches function identities so memoized children depending on those functions don't rerender.
  - See `src/App2.js` for live examples (clock, boxes, prime calculator, MegaBoost).

---

## Important files / entry points

- App shell
  - `src/index.js`
  - `src/App.js` — app switcher (shows App1 / App2 demos)
- Rerender demos
  - `src/App1.js` — counters, memo vs non-memo children, context example
- useMemo / useCallback demos
  - `src/App2.js` — clock (`useTime`), boxed layout (`useMemo` for boxes), `MegaBoost` (`useCallback`), and `PrimeCalculator`
- Supporting components
  - `src/Box.js`
  - `src/MegaBoost.js`
  - `src/Clock.js`
  - `src/PrimeCalculator.js`

---

## How to explore the demos (suggested experiments)

1. App1 (rerender behavior)
   - Open `src/App1.js`. Add `console.log` in child components (or inspect React DevTools) to see which components rerender when you change state.
   - Toggle counters and note how non-memoized vs memoized children behave.

2. App2 (`useMemo` / `useCallback`)
   - Open `src/App2.js` (live clock + boxes + MegaBoost).
   - Remove `React.useMemo` from the `boxes` array and observe additional rerenders in `Box` and children.
   - Remove `React.useCallback` from `handleMegaBoost` (inline function) and observe how a memoized `MegaBoost` starts rerendering more often.
   - Move `PrimeCalculator` work behind `useMemo` or a button to avoid recomputation on every render.

---

## References

- [Why React re-renders](https://www.joshwcomeau.com/react/why-react-re-renders/)
- [useMemo & useCallback guide](https://www.joshwcomeau.com/react/usememo-and)
- [Before You memo()](https://overreacted.io/before-you-memo/)