import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const Button = lazy(() => importMDX('./Button.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Button />
        </Suspense>
    );
}

export default Component;
