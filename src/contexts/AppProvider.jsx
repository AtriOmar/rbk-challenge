import React, { useContext } from "react";
import useLocalStorage from "../lib/useLocalStorage";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
  });

  const [links, setLinks] = useLocalStorage("links", [
    {
      id: 0,
      platform: "github",
      link: "https://www.github.com/John-doe",
    },
    {
      id: 1,
      platform: "youtube",
      link: "https://www.youtube.com/John-doe",
    },
    {
      id: 2,
      platform: "facebook",
      link: "https://www.facebook.com/John-doe",
    },
    {
      id: 3,
      platform: "facebook",
      link: "https://www.facebook.com/John-doe",
    },
    {
      id: 4,
      platform: "facebook",
      link: "https://www.facebook.com/John-doe",
    },
    {
      id: 5,
      platform: "facebook",
      link: "https://www.facebook.com/John-doe",
    },
    {
      id: 6,
      platform: "facebook",
      link: "https://www.facebook.com/John-doe",
    },
  ]);

  return <AppContext.Provider value={{ user, setUser, links, setLinks }}>{children}</AppContext.Provider>;
}

export default AppProvider;

export function useAppContext() {
  return useContext(AppContext);
}
