import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Icons = lazy(() => importMDX('./Icons.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Icons />
        </Suspense>
    );
}

export default Component;
