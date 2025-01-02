## React Router DOM
-  Used for managing navigation and routing in single-page applications (SPAs). It allows developers to define multiple routes in their applications and handle client-side navigation, enabling users to navigate between different components without reloading the entire page.

- 'Link' we used in place of anchor tag as whenever we use anchor tag our whole page gets reload, and react does not support reload/recreation of DOM, thus we use Link tag as it directly injecting the new/updated values without reloading it

- 'NavLink' and 'Link' are same, just 'NavLink' provide some more additional features than 'Link' 

### RouterProvider
- RouterProvider is a utility whose purpose is to manage and provide routing context to your application, enabling navigation between different pages (used in SPA(single page applications))
- RouterProvider is used to provide a Router object to our application. It simplifies routing by encapsulating/ wrapping route definitions and data loading in one place.

### createBrowserRouter()
- createBrowserRouter is a function from React Router (v6.4 and above) used to define and configure routes for a React application

### createRoutesFromElements()
- createRoutesFromElements() is a utility function in React Router (v6.4 and above). It allows you to create route configurations from JSX route definitions (using route tag and atrributes like path, loader etc)

### useparams()
- useParams is a React Router hook used to access the URL parameters of the current route
-  It is commonly used when defining routes with dynamic segments (e.g., /user/:id)
- #### Purpose:
- To retrieve parameters defined in a route's path property. For example, if your route is /user/:id, useParams allows you to access the id parameter's value.
- #### Returns
- useParams returns an object where keys are the parameter names and values are the extracted parameter values from the URL.

### loader{ ()=>{} } attribute in route tag (we can write callback inside it)
- The loader attribute  (introduced in React Router v6.4 and above) is used to define a data-loading function for that route. The loader function is executed when the route is accessed, allowing you to fetch or prepare data before rendering the component associated with the route.
- #### useLoaderData 
- useLoaderData hook is used to access the data returned by the loader.