Steganography is about *covert* communication where you hide a message from a third party — attackers can’t compromise you if they *don’t even know you’re communicating something*. This contrasts with cryptography, which is where attackers know you’re communicating something of value, but you make it hopeless for them to understand the message.

In CTFs, often you’ll be given image, video or audio files without much context and be asked to retrieve the flag from them. They’ll likely be steganography challenges, and you’ll have to work out how that provided file might be hiding the flag. This is where it helps to know some common steganography techniques like LSB steganography, hiding files within files, .

**LSB Steganography:**

LSB (least significant bit) steganography works by writing the message over the least significant bit of the bytes of a file. Usually, doing this has very little effect on how the image actually looks which makes it very effective for hiding information. In the case of image files, modifying the least significant bit of each byte will only produce an indistinguishable change in colour from the orignal image when viewed by a human. 

**Colour planes and bit planes:**

Sometimes, images can hide a secret message by only revealing it on a specific colour plane (R, G or B) or pixel [bit plane](https://en.wikipedia.org/wiki/Bit_plane). There are a plethora of online [checklists](https://stegonline.georgeom.net/checklist) and tools for common visual steganography techniques, for example, in this [image steganography tool](https://stegonline.georgeom.net/upload), you can apply filters that let you view a specific colour or bit plane.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7cd7206d-7352-4acc-9d3a-e1befb22e43d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T013059Z&X-Amz-Expires=86400&X-Amz-Signature=c615e654e54cdc3e1494c089f04ceac5a12654d364021b42359993e707c9e9f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Audio waveform and spectrograph views:**

Sometimes, the secret message can be expressed through the waveform, which for example, might communicate morse code or a binary encoding for printable characters, or it can be visually expressed spectrograph views. [Audacity](https://www.audacityteam.org/) is a great cross-platform tool for solving audio steganography challenges, for example, this is what a spectrograph view might uncover in an audio file that sounds like garbled static noise:

![spectrogram.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47b6c39c-5d58-4fa1-bf23-2d320f4715e1/spectrogram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T013101Z&X-Amz-Expires=86400&X-Amz-Signature=315ac6c378c434a6fa2ff219021fb5a6851b6b221d3395ebda9fce0112a74235&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22spectrogram.png%22&x-id=GetObject)