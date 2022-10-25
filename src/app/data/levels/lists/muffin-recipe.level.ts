import { Level } from '../../../model/level.interface';
import { htmlToLevel } from '../../../utils/level-generator'

const html = `
<html>
<head></head>
<body>
<h1> Muffin recipe </h1>
<p>follow these instructions to make tasty muffins.</p>
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
    
</body>
</html>
`
export const muffinRecipeLevel: Level = htmlToLevel('Muffin Recipe', 'This level introduces ordered lists.', html);