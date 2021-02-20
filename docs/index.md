## Dependency Installation

(React-native)
Install the following dependencies for your native app

1. [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/docs/installation).
2. [Gesture handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation).

(create-react-app)
To Run this on web (create-react-app)

install this

npm i --save-dev metro-react-native-babel-preset

you will need to eject the app and add the following to webpack.config.js

 plugins: ['react-native-reanimated/plugin'],
 presets: ['module:metro-react-native-babel-preset'],
 
 & if you get _DEV_ error add the following
 
 new webpack.DefinePlugin({
        __DEV__: process.env,
      }),

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ServesAll/Molecules/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.

## Accordion

### Examples

Accordion without scroller or unified behaviour

```markdown
import {AccordionItem} from '@servesAll/molecules';

 <AccordionItem>
  <AccordionItem.Head>
    # Accordion Head Content
  </AccordionItem.Head>
  <AccordionItem.Body>
    # Accordion Body Content
  </AccordionItem.Body>
 </AccordionItem>
 <AccordionItem>
  <AccordionItem.Head>
   # Accordion Head Content
  </AccordionItem.Head>
  <AccordionItem.Body>
   # Accordion Body Content
  </AccordionItem.Body>
 </AccordionItem>
```

Accordion with scroller and unified behaviour

```markdown
import {AccordionItem, AccordionScroller} from '@servesAll/molecules';

<AccordionScroller>
 <AccordionItem>
  <AccordionItem.Head>
    # Accordion Head Content
  </AccordionItem.Head>
  <AccordionItem.Body>
    # Accordion Body Content
  </AccordionItem.Body>
 </AccordionItem>
 <AccordionItem>
  <AccordionItem.Head>
   # Accordion Head Content
  </AccordionItem.Head>
  <AccordionItem.Body>
   # Accordion Body Content
  </AccordionItem.Body>
 </AccordionItem>
</AccordionScroller>
```
