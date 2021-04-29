import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const BottomNavBar = lazy(() => importMDX('./BottomNavBar.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BottomNavBar />
        </Suspense>
    );
}

export default Component;
