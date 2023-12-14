import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Twitter Clone</h1>
        <div className="flex items-center">
          <span className="text-sm md:text-md mr-2">Welcome,</span>
          <span className="font-semibold">{username}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
