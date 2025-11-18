// // import { useState } from "react";

// // function Counter() {
// //   let [counter, setCounter] = useState(0);
// //   return (
// //     <div className="container">
// //       <h2 className="text-primary">Counter App</h2>
// //       <div className="p-3 mb-4">
// //         <button
// //           className="btn btn-success mx-3"
// //           onClick={() => setCounter(counter+1)}
// //         >
// //           ➕
// //         </button>
// //         <button
// //           className="btn btn-danger"
// //           onClick={() => setCounter(counter-1)}
// //         >
// //           ➖
// //         </button>
// //       </div>
// //       <div>
// //         <h3 className="text-info">
// //           Counter : <span className="badge text-bg-secondary">{counter}</span>
// //         </h3>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Counter;

// import { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   const increament = () => setCounter(counter + 1);
//   const decreament = () => {
//     if (counter > 0) setCounter(counter - 1);
//   };

//   return (
//     <div className="container">
//       <h2 className="text-primary">Counter App</h2>

//       <div className="p-3 mb-4">
//         {/* <button
//           className="btn btn-success mx-3"
//           onClick={() => setCounter(counter + 1)}
//         >
//           ➕
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() => setCounter(counter - 1)}
//         >
//           ➖
//         </button> */}

//         <button className="btn btn-success mx-3" onClick={increament}>
//           ➕
//         </button>
//         <button className="btn btn-danger" onClick={decreament}>
//           ➖
//         </button>
//       </div>

//       <div>
//         <h3 className="text-info">
//           Counter: <span className="badge text-bg-secondary">{counter}</span>
//         </h3>
//       </div>
//     </div>
//   );
// }

// export default Counter;
