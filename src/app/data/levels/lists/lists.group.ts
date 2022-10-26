import { LevelGroup } from "src/app/model/level-group.interface";
import { arduinoBoatloaderLevel } from "./arduino-bbotloader.level";
import { muffinRecipeLevel } from "./muffin-recipe.level";
import { shoppingListLevel } from "./shopping-list.level";

const presentationMarkdown = `

# Lists
---

# Types of lists

There re two types of lists in html

- unordered lists
- ordered lists

---

# unordered lists

Unordered lists are typically rendered as bulletpoints and are used when the order of elements is not semantically important.

\`\`\`html
<ul> 
....
</ul>
\`\`\`

---

# ordered lists

ordered lists are typically rendered as numbered lists and are used when the order of elements is semantically important.

\`\`\`html
<ol> 
....
</ol>
\`\`\`

---

# list items

<section>

To populate the the list you can enter list items in the body of the ul or ol tags.

\`\`\`html [2-4]
<ol> 
 <li> item one </li>
 <li> item two </li>
 <li> item three </li>
</ol>
\`\`\`

</section>

<section>
<ol> 
 <li> item one </li>
 <li> item two </li>
 <li> item three </li>
</ol>
</section>

---

# nested lists

<section>

It is possible to nest ul or ol tags inside list items to create nested lists

\`\`\`html [2-9]
<ol> 
 <li> 
    Topic 1
    <ol>
        <li> Subtopic 1.1 </li>
        <li> Subtopic 1.2</li>
        <li> Subtopic 1.3</li>
    </ol>
 </li>
 <li> 
    Topic 2
    <ol>
        <li> Subtopic 2.1 </li>
        <li> Subtopic 2.2</li>
        <li> Subtopic 2.3</li>
    </ol>
 </li>
 <li> topic without subtopics </li>
</ol>
\`\`\`

</section>

<section>
<ol> 
 <li> 
    Topic 1
    <ol>
        <li> Subtopic 1.1 </li>
        <li> Subtopic 1.2</li>
        <li> Subtopic 1.3</li>
    </ol>
 </li>
 <li> 
    Topic 2
    <ol>
        <li> Subtopic 2.1 </li>
        <li> Subtopic 2.2</li>
        <li> Subtopic 2.3</li>
    </ol>
 </li>
 <li> topic without subtopics </li>
</ol>
</section>
`;

export const listsGroup: LevelGroup = {
    name: "Lists",
    levels: [shoppingListLevel, muffinRecipeLevel, arduinoBoatloaderLevel],
    presentationMarkdown
}