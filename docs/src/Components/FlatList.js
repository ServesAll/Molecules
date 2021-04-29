import React, {lazy, Suspense} from 'react';
import {importMDX} from "mdx.macro";

const FlatList = lazy(() => importMDX('./FlatList.mdx'))

function Component() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FlatList />
        </Suspense>
    );
}

export default Component;
