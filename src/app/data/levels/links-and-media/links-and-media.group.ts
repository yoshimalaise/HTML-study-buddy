import { LevelGroup } from "src/app/model/level-group.interface";
import { aboutOpenHPSlevel } from "./about-openhps.level";
import { photoBookLevel } from "./photo-book.level";

const presentationMarkdown = `

# Links and Media

---

## Links

The &lt;a> tag defines a hyperlink, which is used to link from one page to another.
The most important attribute of the &lt;a> element is the href attribute, which indicates the link's destination.
By default, links will appear as follows in all browsers:

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red

source: https://www.w3schools.com/tags/tag_a.asp

---

## Usage

\`\`\`html
<a href="http://www.vub.be" target="_blank">
 visit the vub website
</a>
\`\`\`

---

## attributes

The anchor tag has two main attributes 

- href
- target

---

## Href 
the href attribute is used to specificy the location you want to link to (e.g. http://www.google.be)

\`\`\`html [2]
<a 
   href="http://www.vub.be" 
   target="_blank">
        visit google
</a>
\`\`\`

---

## target 
the target attribute is used to tell where you want to open the linked document.

---

There are five possible values:

- _blank - Opens the linked document in a new window or tab
- _self - Opens the linked document in the same frame as it was clicked (this is default)
- _parent - Opens the linked document in the parent frame
- _top - Opens the linked document in the full body of the window
- framename - Opens the linked document in the named iframe

---

## Example
\`\`\`html [3]
<a 
   href="http://www.vub.be" 
   target="_blank">
        visit google
</a>
\`\`\`

---

# Media

--- 

## Images

The &lt;img> tag can be used to show images on your webpage.

\`\`\`html
<img 
   src="path/to/image" 
   alt="description">
</img>
\`\`\`

`;

export const linksAndMediaGroup: LevelGroup = {
    name: "Links and Media",
    levels: [aboutOpenHPSlevel, photoBookLevel],
    presentationMarkdown
}