## hooks 
Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.
some examples of built in hooks are- useCallback, useState, useEffect, useState, useId
but we can also create our own hooks- hooks are nothing just a method, which return us some data


- url => https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

- remember to always gives keys while using loop in react

### useId (read directly from documentation, explaination is good there)
a React Hook for generating unique IDs that can be passed to accessibility attributes. (HTML accessibility attributes like aria-describedby let you specify that two tags are related to each other. For example, you can specify that an element (like an input) is described by another element (like a paragraph). ) {ex- label and input are related and so on}

- Do not call useId to generate keys in a list. Keys should be generated from your data.

- definition => const id = useId()

### swap func explaination

If the swap function gets executed, here's what happens:

React's useState updates do not take effect immediately. They are batched and applied after the current function execution completes.
When you call setTo(from), the current value of from ( ex-'inr') is queued to update to.
When you call setFrom(to), the current value of to (ex- 'usd') is queued to update from.
Because these updates happen in a batch and do not interfere with each other
