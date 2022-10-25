import { Level } from '../../../model/level.interface';
import { markdownToLevel } from '../../../utils/level-generator'

const markdown = `
# Shopping list

Please buy the following items from the store:

- eggs
- bacon
- carrots
- onions
`
export const shoppingListLevel: Level = markdownToLevel('Shopping List', 'This level introduces unordered lists.', markdown);