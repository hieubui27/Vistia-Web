import React from 'react';

// 'children' ở đây chính là các trang con (page.tsx) của bạn
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="absolute inset-0 w-full h-full bg-fixed bg-[url(/images/AIPredict/Blurbackground.png)] bg-no-repeat bg-cover bg-center">
            {children}
        </div>
     
    );
  }