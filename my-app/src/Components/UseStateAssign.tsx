import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center border rounded p-5 shadow bg-white">
        <h2 className="text-primary mb-3">🛒 PRODUCT: IPHONE 17 PRO</h2>
        <h4 className="mb-4 text-dark">PRICE : $1599</h4>

        <div className="p-3">
          <button className="btn btn-success mx-3" onClick={increment}>
            ➕
          </button>
          <span className="mx-3 fs-4 badge text-bg-secondary">{counter}</span>
          <button className="btn btn-danger mx-3" onClick={decrement}>
            ➖
          </button>
        </div>

        <div className="mt-3 fs-5">
          <strong>Total:</strong> <span>${1599 * counter}</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;

// import { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   const increament = () => setCounter(counter + 1);
//   const decreament = () => {
//     if (counter > 0) setCounter(counter - 1);
//   };

//   return (
//     <div className="container">
//       <h2 className="text-primary">🛒 PRODUCT: IPHONE 17 PRO </h2>
//       <h4 className="mx-10">PRICE :  $1599</h4>

//       <div className="p-3 mb-4">
//         <button className="btn btn-success mx-3" onClick={increament}>
//           ➕
//         </button>
//         <span className="m-4 badge text-bg-secondary">{counter}</span>

//         <button className="btn btn-danger" onClick={decreament}>
//           ➖
//         </button>
//       </div>

//       <div className="">
//         Total : <span>$ {1599 * counter}</span>
//       </div>

//       {/* <div>
//         <h3 className="text-info">
//           Counter: <span className="badge text-bg-secondary">{counter}</span>
//         </h3>
//       </div> */}
//     </div>
//   );
// }

// export default Counter;
