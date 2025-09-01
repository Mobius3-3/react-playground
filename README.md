# How does React rerender?

In root structure of components, when state in parent changes child components under it will be rerendered.

## Over frequently rerender

React tries to make sure all the components under parent component stay in sync when parent one's state changes. That means even the child [`pure component`](# "A pure component is one that always produces the same UI when given the same props.")'s state stay the same it still be rerendered.

1. `useMemo`: Cache staple snapshot of UI rather than rerender if the state of the component is not changed. (Todo: deep dive about `useMemo`)

2. `useContext` + `useMemo`: If the state value changing is only passed through `useContext` then rerender is triggered when passed state is changed. Otherwise, with using `useMemo` it is not expected to be rerendered.

## Reference

- [Josh's blog](https://www.joshwcomeau.com/react/why-react-re-renders/)

