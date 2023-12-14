'use client'
import React from 'react';
import NewPostForm from '@/components/page-components/new-post-form';

export default function NewPostModal() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold">New Post</h3>
        <NewPostForm />
      </div>
    </div>
  );
};
