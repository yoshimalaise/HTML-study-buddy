import { Level } from '../../../model/level.interface';
import { markdownToLevel } from '../../../utils/level-generator'

const markdown = `
# The web academy employee manual

This is the online employee manual for all web academy employees.
Failure to comply with these rules will result in termination of your contract.

Please read the following sections carefully. If there are any questions please contact your supervisor.

## Work schedule
Employees are expected to be at the office between 9am and 6pm.
Employees should work 5 days each week, if employees work during the weekend they are entitled to a day of during the week.
In this case the employee should reach out to their supervisor to make the necessary arrangements.

## House rules

### Food and drinks at work
Employees are permitted to take breaks if they want to eat or drink something. However, under no circumstance should eployees eat at their desks or near the electronic equipment.
Alcoholic beverages are completely forbidden on the premises.

### Using equipment
Employees are free to use any equipment they may need for business purposes, however, employees should never take home the equipment.

This is also a paragraph of text

`;

export const employeeManual: Level = markdownToLevel('Employee Manual', 'This level will help you get used to basic html paragraphs and titles', markdown);