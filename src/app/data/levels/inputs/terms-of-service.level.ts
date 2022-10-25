import { Level } from '../../../model/level.interface';
import { htmlToLevel } from '../../../utils/level-generator'

const html = `
<html>
<head></head>
<body>
<h1> Terms of Service </h1>
<p> 
Sed at risus et tellus suscipit rutrum. Nulla varius vulputate est ac iaculis. Morbi bibendum sed urna a ultricies. Duis sollicitudin eleifend aliquet. Vestibulum sed hendrerit massa, sed commodo nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sapien libero, feugiat scelerisque molestie sit amet, finibus in sem. Etiam eleifend diam id leo interdum, et cursus tellus volutpat. Aenean gravida nec nisi a porta. Nullam nec leo scelerisque, consequat ante malesuada, pulvinar orci. Donec malesuada non metus nec imperdiet. Etiam aliquet, magna eget convallis consectetur, erat purus consequat neque, sed convallis nisl ligula non augue.
</p>

<input type="text"> I accept the terms and conditions

</body>
</html>
`
export const termsOfServiceLevel: Level = htmlToLevel('Terms of Service', 'This level introduces the checkbox input.', html);