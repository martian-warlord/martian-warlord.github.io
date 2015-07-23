// Create camera object

var GoPro = require('goproh4');

var cam = new GoPro.Camera();



// Options can be given:

var cam = new GoPro.Camera({
    ip: '10.5.5.9' /* Gopro ip, should be 10.5.5.9 except in remote mode */,
    broadcastip: '10.5.5.255' /* Broadcast ip of the gopro network, use to wake up the gopro (WOL protocol), should be 10.5.5.255 */,
    mac: '............' /* Mac address, used to wake up the gopro, should be set if the camera is off before launching the script, can be retrieve on the camera object cam._mac */
});