import React from 'react';

// 'children' ở đây chính là các trang con (page.tsx) của bạn
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="AI absolute inset-0">
        <div className="relative w-full h-full ">
          <div className="absolute inset-0 size-full z-10 bg-black bg-fixed bg-[radial-gradient(ellipse_70%_30%_at_left_center,#3D002F,rgba(255,0,0,0)),radial-gradient(ellipse_70%_30%_at_right_center,#39007A,rgba(255,255,255,0)),radial-gradient(ellipse_70%_30%_at_bottom_center,#002153,rgba(255,255,255,0))]"></div>
            {children}
        </div>
      </div>
    );
  }