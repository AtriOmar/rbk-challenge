import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "../lib/useLocalStorage";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {
    picture: null,
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
  });

  const [userInput, setUserInput] = useState({ ...user });

  const [links, setLinks] = useLocalStorage("links", [
    { id: 0, platform: "facebook", link: "John-Doe" },
    { id: 1, platform: "youtube", link: "John-Doe" },
    { id: 2, platform: "github", link: "John-doe" },
    { id: 3, platform: "instagram", link: "John-Doe" },
    { id: 4, platform: "linkedin", link: "John-Doe" },
  ]);

  const [linksInput, setLinksInput] = useState(JSON.parse(JSON.stringify(links)));

  useEffect(() => {
    setUserInput({ ...user });
  }, [user]);

  useEffect(() => {
    setLinksInput(JSON.parse(JSON.stringify(links)));
  }, [links]);
  return <AppContext.Provider value={{ user, setUser, userInput, setUserInput, links, setLinks, linksInput, setLinksInput }}>{children}</AppContext.Provider>;
}

export default AppProvider;

export function useAppContext() {
  return useContext(AppContext);
}
