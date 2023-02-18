// Full device list from pulseaudio alsa module
// https://gitlab.freedesktop.org/pulseaudio/pulseaudio/-/blob/300db779224625144d6279d230c2daa857c967d8/src/modules/alsa/alsa-mixer.c#L2794
var DefaultIcon = "audio-speakers";

var IconDevicesMap = {
    "audio-speakers": [
        "analog-output",
        "analog-output-mono",
        "analog-output-speaker",
        "multichannel-output"
    ],
    "audio-headphones": [
        "analog-output-lineout",
        "analog-output-headphones",
        "analog-output-headphones-2",
        "analog-output-headphones-mono",
        "virtual-surround-7.1"
    ],
    "audio-headset": [
        "steelseries-arctis-output-game-common",
        "steelseries-arctis-output-chat-common",
        "analog-chat-output",
        "analog-chat-input",
        "analog-input-microphone-headset"
    ],
    "video-display-symbolic": [
        "hdmi-output",
        "analog-input-video"
    ],
    "audio-radio": [
        "analog-input-radio"
    ],
    "audio-input-microphone": [
        "analog-input",
        "analog-input-microphone",
        "analog-input-microphone-front",
        "analog-input-microphone-rear",
        "analog-input-microphone-dock",
        "analog-input-microphone-internal",
        "analog-input-linein",
        "multichannel-input"
    ],
    "audio-card-symbolic": [
        "iec958-stereo-output",
        "iec958-stereo-input"
    ]
};

function portToIconName(port) {
    if (!port) {
        return DefaultIcon;
    }

    for (var icon in IconDevicesMap) {
        var deviceNames = IconDevicesMap[icon];
        if (deviceNames.includes(port.name)) {
            return icon;
        }
    }

    return DefaultIcon;
}
