import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Header = lazy(() => importMDX('./Header.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
        </Suspense>
    );
}

export default Component;
