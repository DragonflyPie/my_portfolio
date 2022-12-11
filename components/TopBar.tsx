import React from "react";

interface TopBarProps {
  onClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  welcomeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

const TopBar = ({ onClick, welcomeRef, contactsRef }: TopBarProps) => {
  return (
    <nav className="flex justify-center content-center gap-8 fixed bg-transparent text-blue-800 mr-0 w-screen p-5 pr-10">
      <a onClick={() => onClick(welcomeRef)}>HOME</a>
      <a onClick={() => onClick(contactsRef)}>CONTACTS</a>
    </nav>
  );
};

export default TopBar;
