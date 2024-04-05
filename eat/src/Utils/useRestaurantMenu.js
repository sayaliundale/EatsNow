// import { MenuAPI } from "./Constants";
// import { useEffect, useState } from "react";

// const useRestaurantMenu = (resId) =>{
//     const [resInfo, setResinfo] = useState(null);

//     useEffect(()=>{
//         fetchMenu();
//     },[]);

//     const fetchMenu = async () => {
//         try {
//           const data = await fetch(MenuAPI + resId);
//           const json = await data.json();
    
//           setResinfo(json.data);
//         } catch (error) {
//           console.error("Error fetching menu:", error);
//         }
//       };

//     return resInfo;
// }
// export default useRestaurantMenu;