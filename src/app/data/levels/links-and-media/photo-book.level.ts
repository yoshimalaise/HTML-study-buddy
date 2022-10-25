import { Level } from '../../../model/level.interface';
import { htmlToLevel } from '../../../utils/level-generator'

const html = `
<html>
<head></head>
<body>

<h1> Zebras </h1>
<img src="https://photos.smugmug.com/Portfolios/Wildlife/i-S7bVWg2/14/54e231c7/XL/296A6982-XL.jpg" alt="a group of zebras"></img>
<h1> Lions </h1>
<img src="https://photos.smugmug.com/Portfolios/Wildlife/i-v3HWjDV/16/4e0e5094/XL/296A8166-XL.jpg" alt="two lions"></img>
<h1> Elephants </h1>
<img src="https://photos.smugmug.com/Portfolios/Wildlife/i-2Sbd2Fb/3/6aac67fd/L/B69I9510-L.jpg" alt="Elephants"></img>
<h1> Polar bear </h1>
<img src="https://photos.smugmug.com/Portfolios/Wildlife/i-hjGGd2d/15/28d5c86c/XL/IMG_5329-XL.jpg" alt="a polar bear walking on ice"></img>

</body>
</html>
`
export const photoBookLevel: Level = htmlToLevel('Photobook', 'This level introduces images.', html);