import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Theme = lazy(() => importMDX('./Theme.mdx'));

function Component() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Theme />
        </Suspense>
    );
}

export default Component;
