// import { createContext, useContext, useState } from "react";

// // Create the context with createContext, not useContext
// const FooterVisibilityContext = createContext();

// export const useFooterVisibility = () => useContext(FooterVisibilityContext);

// const FooterVisibilityProvider = ({ children }) => {
//     const [isFooterVisible, setFooterVisible] = useState(true);

//     return (
//         <FooterVisibilityContext.Provider value={{ isFooterVisible, setFooterVisible }} >
//             {children}
//         </FooterVisibilityContext.Provider>
//     );
// };

// export { FooterVisibilityContext, FooterVisibilityProvider };
// export default FooterVisibilityContext;
