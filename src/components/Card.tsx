import React from "react";

type CardProps = {
  title: string;
  author: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Card({ title, author, description, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-md w-full hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
      <div className="text-sm text-gray-500 mb-2">Автор: {author}</div>
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {children}
    </div>
  );
}