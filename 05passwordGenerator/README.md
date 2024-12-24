## useCallback (used for memoization of function)
-React Hook that lets you cache a function definition between re-renders.


### definition => const cachedFn = useCallback(fn, dependencies)

### parameters:-

fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. 

dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.

### Returns :-
On the initial render, useCallback returns the fn function you have passed.
During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.


## useEffect (used to run a specified func at the time of load & everytime any of the dependencies gets changed)
- a React Hook that lets you synchronize a component with an external system.

### definition => useEffect(setup, dependencies?)

### parameters :-

setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function.
optional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.  If you omit this argument, your Effect will re-run after every re-render of the component.

### returns :-
useEffect returns undefined.

## useRef
- a React Hook that lets you reference a value that’s not needed for rendering.

### definition => const ref = useRef(initialValue)

### Usage :-
Referencing a value with a ref
Manipulating the DOM with a ref
Avoiding recreating the ref contents

### Returns 
useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
On the next renders, useRef will return the same object.

