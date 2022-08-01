// import React, { useReducer } from "react";
// import PropTypes from "prop-types";
// import { useRouter } from "next/router";

// const initialState = {
//   username: "user",
//   isLoggedIn: false,
//   editingMood: false,
//   selectedMood: /* to update */ true,
//   activeTabs: "home",
// };

// const GlobalContext = React.createContext(initialState);

// const GlobalProvider = ({ children, name }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const reducer = (state, action) => {
//       switch (action.type) {
//         case "home":
//           router.push("/home");
//           break;
//         case "favourites":
//           router.push("/favourites");
//           break;
//         case "add":
//           router.push("/add");
//           break;
//         case "settings":
//           router.push("/settings");
//           break;
//         // default:
//         //   router.push("/");
//         // break;
//       }
//     };
//   }, [activeTabs, router]);
//   const [activeTabs, setActiveTabs] = useState(name);
//   const [state, dispatch] = useReducer(reducer, { ...initialState });
//   return (
//     <GlobalContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// GlobalProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export { GlobalContext, GlobalProvider };
