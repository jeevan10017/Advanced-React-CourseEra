//UseState Using PrevState Example


// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard(prevState => {
//         return {
//           ...prevState,
//           text: "Your coupon has been used.",
//           valid: false,
//           instructions: "Please visit our restaurant to renew your gift card.",
//         }
//     });
//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }



import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => { 
    document.title = toggle ? 'Toggle is ON' : 'Toggle is OFF';
  }, [toggle])



  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={clickHandler}>Toggle Message </button>
{toggle && <h2>Toggle Message is Here </h2>  }
    </div>
  )
}

export default App