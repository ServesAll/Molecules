import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/oceanicNext";

export default ({children}) => {
    return (
        <Highlight {...defaultProps} code={children} theme={theme} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={{...style, padding: '20px', borderRadius: '14px'}}>
          {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                  ))}
              </div>
          ))}
        </pre>
            )}
        </Highlight>
    )
}
