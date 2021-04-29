import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Layout = lazy(() => importMDX('./Layout.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout />
        </Suspense>
    );
}

export default Component;
