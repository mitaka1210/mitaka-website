import React from 'react';
import dynamic from "next/dynamic";

const Page = () => {
    const LeaveCommentHTML = dynamic(
        () => import('./leaveCommentHTML'),
        {ssr: false}
    );
    return (
        <div>
            <LeaveCommentHTML/>
        </div>
    );
};

export default Page;
