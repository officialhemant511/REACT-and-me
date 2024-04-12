import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h1>custom react</h1>
//     </div>
//   )
// }

// custom react 

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me'
};


// const ReactElement = (
//     <a href="www.google.com">click me</a>
// )

// const anotheruser = " CHai  h  Hemant ki"
// const ReactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   'click me | Hemant hu bhai',
//   anotheruser
// )
ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
  // <App/>

)
