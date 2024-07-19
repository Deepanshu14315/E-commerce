// import React, { useState } from 'react'


// // export const productcontext = create.Context();

// const Context = (props) => {
//     // const [product, setProduct] = useState(null)
//     return (
//         // <productcontext.provider value={[product,setProduct]} >
//         <div>
//             {props.children}
//         </div>
//         // </productcontext.provider >
//     )
// }

// export default Context


//context api - jaise ki hamare pass ek toyhouse hein usemin alag alag room hai
// or hame ek toy ko sabhi room e=mein lejana ho to hum toy ko ek ek kamremein nahi le jayege
// isse bachne ke liye ham context api ka use karte hai

/// Sabse pehel hame magic box create karna hoga

// Kya hota hai Context API?
// Imagine karo tumhare paas ek bade khel ka ghar (playhouse) hai, jismein bahut saare kamre hain. Har kamre mein alag-alag toys hain. Ab tumhe apna ek favorite toy, jo main kamre mein hai, sabhi kamron tak le jana hai. Agar tumhe har kamre mein jakar ye toy dikhana pade toh kitna mushkil ho jayega, na ....?

// Context API ek magic jaisa hai jo ye toy bina har kamre mein le jaaye, seedha har kamre mein pahunchane mein madad karta hai.

// Kaise use karte hain Context API?
// Magic Box Banate Hain (Create Context):
// Pehle hum ek magic box banate hain jismein hum apna toy rakhte hain.

// javascript
// Copy code
// import React, { createContext } from 'react';

// const MyToyBox = createContext();
// Box Ko Set Karte Hain (Provide Context):
// Ab hum magic box ko apne ghar ke main gate pe rakhte hain taaki sabhi kamron mein toys ja sakein.

// javascript
// Copy code
// import React, { useState } from 'react';
// import MyToyBox from './MyToyBox';

// const MyToyProvider = ({ children }) => {
//     const [toy, setToy] = useState("Red Car");

//     return (
//         <MyToyBox.Provider value={{ toy, setToy }}>
//             {children}
//         </MyToyBox.Provider>
//     );
// };
// Box Se Toy Nikalte Hain (Consume Context):
// Ab jab humein kisi kamre mein toy chahiye, hum bas magic box ko bula lete hain aur toy le lete hain.

// javascript
// Copy code
// import React, { useContext } from 'react';
// import MyToyBox from './MyToyBox';

// const MyRoom = () => {
//     const { toy, setToy } = useContext(MyToyBox);

//     return (
//         <div>
//             <p>My favorite toy is: {toy}</p>
//             <button onClick={() => setToy("Blue Truck")}>Change Toy</button>
//         </div>
//     );
// };
// Simple Samjho
// Magic Box Banaya: Ek box banaya jismein toy rakha.
// Box Ko Set Kiya: Box ko ghar ke entrance pe rakh diya taaki har kamra usse toy le sake.
// Toy Nikaala: Jab kisi kamre ko toy chahiye, usne bas box se toy nikaal liya.
// Is tarah se, Context API se hum React app mein easily data share kar sakte hain bina har jagah props pass kiye.


// import React from 'react'
// import { createContext } from 'react'


// const MyToyBox = createContext()
// const Context = () => {
//   return (
//     <div>Context</div>
//   )
// }

// export default Context



import axios from './Axios';
import React, { Children, createContext, useEffect, useState } from 'react'


export const ProductContext = createContext();


const Context = (props) => {
    const [product, setProduct] = useState(null);

    const getProducts = async () =>{
        try {
            const {data} = await axios('/products')
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context