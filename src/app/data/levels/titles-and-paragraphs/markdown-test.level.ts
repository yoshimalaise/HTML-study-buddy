import { Level } from '../../../model/level.interface';
import { markdownToLevel } from '../../../utils/level-generator'

const markdown = `
# Hello world

this is some text

## this is a subtitle

### this is a subsubheading
<section>

# subsection 

This is a test

</section>

## this is also a subtitle
`;

export const markdownTest: Level = markdownToLevel('Markdown test', 'This level will help you get used to basic html', markdown);