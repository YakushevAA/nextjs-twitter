import React from 'react';

const SinglePost: React.FC<{
  userName: string,
  text: string,
  date: string
}> = ({ userName, text, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden m-4">
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{userName}</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">{text}</p>
        <p className="mt-2 text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default SinglePost;
