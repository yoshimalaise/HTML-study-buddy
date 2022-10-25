import { Level } from '../../../model/level.interface';
import { htmlToLevel } from '../../../utils/level-generator'

const html = `
<html>
<head></head>
<body>
<h1> OpenHPS - An Open Source Hybrid Positioning System </h1>
<h2> Introduction </h2>
<p> 
OpenHPS is an open source hybrid positioning system that allows developers to fuse multiple positioning techniques and algorithms together in a graph topology. The project is led by PhD candidate 
<a href="https://wise.vub.ac.be/member/maxim-van-de-wynckel" target="_blank">Maxim Van de Wynckel </a>
as part of his research towards Hybrid Positioning and Implicit Human-Computer Interaction under the supervision of 
<a href="https://wise.vub.ac.be/member/beat-signer" target="_blank">Prof. Dr. Beat Signer</a>.
</p>
    
<p>
It was created as a positioning framework that can support various different positioning techniques, both during the online and offline stage.
</p>

<h2> Source </h2>

<p>
Our repositories can be found on GitHub 
<a href="https://github.com/OpenHPS" target="_blank">https://github.com/OpenHPS</a>
. The distributed NPM packages can be found under the OpenHPS organisation 
<a href="https://www.npmjs.com/org/openhps" target="_blank">https://www.npmjs.com/org/openhps</a>
.
</p>

</body>
</html>
`
export const aboutOpenHPSlevel: Level = htmlToLevel('About OpenHPS', 'This level introduces links.', html);