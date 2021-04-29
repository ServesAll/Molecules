import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Input = lazy(() => importMDX('./Input.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Input />
        </Suspense>
    );
}

export default Component;
