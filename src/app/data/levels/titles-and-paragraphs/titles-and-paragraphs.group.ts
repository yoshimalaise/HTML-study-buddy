import { LevelGroup } from "src/app/model/level-group.interface";
import { WelcomePartyRecipe } from "./welcome-party.recipe";
import { employeeManual } from "./employee-manual.level";
import { aboutWiseLevel } from "./about-wise.level";

const presentationMarkdown = `

# Titles and Paragraphs
---

# Titles

If you want to include titles in your web page you can do this by heading tags.

---

# Titles

HTML supports up to 6 levels of headings, with &lt;h1> being the highest level level of headings,
&lt;h1> are subheadings etc, all the way to  &lt;h6>.

---

<section>

# Example

\`\`\`html
<h1> This is my main heading </h1> 
<h2> This is a subheading </h2> 
<h3> This is a subsubheading </h3> 
\`\`\`
</section>

<section>
<h1> This is my main heading </h1> 
<h2> This is a subheading </h2> 
<h3> This is a subsubheading </h3> 
</section>

---

# Paragraphs

To include a paragraph of text in your document you can use the &lt;p> tag.
The browser will automatically provide some space around your paragraph to make it stand on itself.
---

<section>

# Example

\`\`\`html
<p> this is the fist paragraph of text on my site </p>

<p> this is a second paragraph of text on my site </p>
\`\`\`
</section>

<section>
<p> this is the fist paragraph of text on my site </p>

<p> this is a second paragraph of text on my site </p>
</section>


`;

export const titlesAndParagraphsGroup: LevelGroup = {
    name: "Titles and Paragraphs",
    levels: [WelcomePartyRecipe, employeeManual, aboutWiseLevel],
    presentationMarkdown
}