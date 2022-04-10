I started off with a few simple sanity checks, running `file` to confirm that
the given file was `WAV` , then I skimmed through the output of `strings` for
any clues and found none, then finally I used `binwalk` to extract any hidden
files embedded within and nothing turned up either.

After playing the audio, I thought it was possibly using morse code encoding.
I found the speed of the blips to be too quick to parse so I decided to launch
Audacity and adjust the playback speed. Once I loaded the file into Audacity 
however, I saw that the signal was definitely not binary as I had believed. It 
looked like this:

![waveform](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/first_contact/waveform.png)

After staring at this for a very long time and thinking about how to decipher
this, I was reasonably sure that each 'block' of waves corresponded to a single
character of the flag &mdash; I just didn't know how to translate from each
block of waves to the character it encoded. I initially tried translating the
'peaks' of each group of waves to 1s and 'lows' of the wave to 0s, however this
would not produce the ASCII codes of printable characters. One crucial 
observation I made was this:

![spectrogram](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/first_contact/waveform-analysis.png)

I thought that this was unlikely to be a coincidence, and perhaps it was the
case that I didn't need to somehow translate the waveform into ASCII codes. I 
didn't know about Audacity's [Spectrogram view](https://manual.audacityteam.org/man/spectrogram_view.html) until I had searched broadly
about alternative ways to visualise the same audio data, but this view 
uncovered the flag!

![spectrogram](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/first_contact/spectrogram.png)
