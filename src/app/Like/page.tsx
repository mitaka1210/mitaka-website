import React from 'react';
import dynamic from "next/dynamic";

const Page = () => {
  const LikeHTML = dynamic(
    () => import('./LikeHTML'),
    {ssr: false}
  );
  return (
    <div>
      <LikeHTML/>
    </div>
  );
};

export default Page;
