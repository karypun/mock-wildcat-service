Prototype of a mock wildcat service
====================================

This is a prototype of a mock internal service using the Home Office design system built in React - it is not a real service and is used to show how the HTML and React code can be used together.

https://test-mock-wildcat-service.herokuapp.com/ 

How it works
------------

Feel free to contribute to this or ask any questions. It is a work in progress.


Notable files and directories
-----------------------------

- `dest/`: Directory containing compiled versions of source code and assets.
- `src/client/`: Source code that is only run on the client.
- `src/client/index.ts`: The entry-point for the client-side bundle.
- `src/common/`: Source code that is run on both the client and the server.
- `src/common/page-wrap.tsx`: The React component that wraps the pages and accepts a `routes` array via its props that can be used for building in navigation.
- `src/common/page-loader.ts`: Boiler-plate for dynamically importing the pages. You shouldn't need to modify this unless you change the location of the pages.
- `src/common/pages/`: Directory containing the pages available on your website.
- `src/common/pages/index.tsx`: The 'home page' for your website.
- `src/server/`: Source code that is only run on the server.
- `src/server/config.ts`: Configuration for the server.
- `src/server/index.ts`: The entry-point for the server.
- `src/server/template.tsx`: The HTML wrapper served by the HTTP server.
- `webpack.config.js`: The webpack config file used to build the static assets including the bundle.
# mock-wildcat-licence
