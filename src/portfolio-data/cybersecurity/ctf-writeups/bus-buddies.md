I approached this challenge by finding easily searchable landmarks in the photos, then trying to confirm where a photo was taken to narrow the list of possible bus routes/destinations. For example, one photo contained 'White Lady Funerals'. 

![white lady funerals photo](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/bus_buddies/1.png)

There were too many possibilities on Google Maps, and after dropping into street view a few times to match the location with the one shown in the photos, I gave up and looked for a better lead. I tried the same approach with another photo that showed the 'Rydges' hotel - I chose this one to try because I knew that the search space would be smaller. 

![Rydges hotel photo](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/bus_buddies/7.png)

After dropping into Google Maps street view a few times, I was able to find a match at the rough address of '116 James Ruse Dr, Rosehill, New South Wales'. Then, I tried to locate the bus stop nearest that location by looking up https://transportnsw.info/. From here, I was able to determine that the photo was taken at this bus stop: https://transportnsw.info/stop?q=G2150262#/. Now, I just brute forced through all the possible buses passing by this stop and quickly found the correct flag!
