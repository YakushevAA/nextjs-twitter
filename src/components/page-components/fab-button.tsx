import Link from 'next/link';
import React from 'react';

const FABCreateButton: React.FC = () => {
    return (
        <Link
          href={`/new`}
          className="absolute bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          aria-label="Create new item">+</Link>
    );
};

export default FABCreateButton;
