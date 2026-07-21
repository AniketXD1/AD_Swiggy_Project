# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- consistent Hashing - read more about it interting topic
- Code Spliting
- Differntial Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs

# Namaste Food

/\*\*

-
- Header
- - Logo
- - Nav Items
    \*Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      -Img
-      -Name of restaurant, Star Rating, cuisine, delery time
  \*Footer
- - Copyright
- - Links
- - Address
- - Contact
-
- we will keps this as as reference
  \*/

# Two types of Export/Import

- Default Export/Import

  export default Component;
  import Component from "path";

- Named Export/Import
  - export const Component;
    -->Note:you can also export your component using a named export

  - import {Component} from "path";

  - Note:
    - IMP-->very important beacuse we will do a lot
    - we be using a lot of times named export/import
    - we be using a lot of times default export/import

# React Hooks

(Normal JS Utility functions)

- Two most IMP Hooks.

1.  useState() --> Superpowerful State Variable in React

2.  useEffect()

# 2 types Routing in web apps

- Client side routing
- server side routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app
- Slice (cartSlice)
- Dispatch (action)
- Selector

# Types of testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed babel dependencies
- Configure Babel
- configure Parcel config file to disable default babel transpilation
- jest configuration
- jest npx init jest@latest
- Install jsdom library
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside my babel config
- install @testing-library/jest-dom -- comand --> npm i -D @testing-library/jest-dom
