import { Level } from '../../../model/level.interface';
import { htmlToLevel } from '../../../utils/level-generator'

const html = `
<html>
<head></head>
<body>
<h1>Burn the firmware using EspRecovery</h1>
<p>
This procedure is recommended for all Operating System and it is usable only via Serial.
</p>
<ol>
    <li>
        <p> First you must upload the EspRecovery sketch on your Arduino UNO WiFi: </p>
        <ul>
            <li>Connect the Arduino UNO WiFi to PC with a USB cable.</li>
            <li>Open the Arduino Software (IDE).</li>
            <li>Select the correspondent port and board.</li>
            <li>Upload the ESPRecovery sketch from File>Examples>Arduino UNO WiFI>Tools menu of Arduino Software (IDE)</li>
        </ul>
    </li>

    <li>
        <p> Enter the board in bootloader mode: </p>
        <ul>
            <li>Disconnect the Arduino Uno WiFi</li>
            <li>Reconnect the board while pressing the ESP B/L button.</li>
        </ul>
    </li>

    <li>
        Open your terminal as Administrator.
    </li>

    <li>
        Download the ESPtool, you can download from here or you can use the command "sudo pip install esptool"
    </li>

    <li>
        <p>  Test the esptool, for example, inserting the below command to read the MAC address: </p>
        <ul>
            <li> python esptool.py -p your port -b baudrate read_mac</li>
            <li> Set the baudrate at 9600.</li>
        </ul>
    </li>

    <li>
        Run the esptool.py script to flash the firmware.
    </li>

    <li>
        Wait some minutes until the process ends.
    </li>

</ol>
</body>
</html>
`
export const arduinoBoatloaderLevel: Level = htmlToLevel('Arduino Firmware Flashing Tutorial', 'This level explores the concept of nested lists.', html);