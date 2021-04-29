import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Loader = lazy(() => importMDX('./Loader.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Loader />
        </Suspense>
    );
}

export default Component;
