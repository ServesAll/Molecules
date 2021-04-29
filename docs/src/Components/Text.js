import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Text = lazy(() => importMDX('./Text.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Text />
        </Suspense>
    );
}

export default Component;
