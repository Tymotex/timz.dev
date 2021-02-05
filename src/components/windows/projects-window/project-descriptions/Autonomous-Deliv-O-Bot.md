---
title: Deliv O Bot
---
An autonomous object delivery vehicle, built with the Arduino Uno Rev3. 

Design features:

- The vehicle determines where the delivery and pick-up points using a sound sensor that responds to sound signals. 
- Stepper motors are used for the precise movement of the vehicle and for the claw's reeling system. 
- A single metal gear servo motor is mounted inside the claw frame which allows precise control over the angle the claw opens and closes at. 
- An ultrasonic sensor is mounted underneath the vehicle which determines the distance between the vehicle and the pickup/delivery platform below it. It can accurately handle distances between 12cm and 210cm from testing. 
    - The vertical distance reading then tells the vehicle how many revolutions the reel's stepper motors should complete in order for the claw to be lowered to the exact point of the object below. 
- The LCD screen gives the user a simple interface for providing status updates and sensor data during runtime.

About the environment:
- The sound signal that triggers the pick-up/delivery routine is produced by an external control module which has an infrared phototransistor built into it. 
    - When an infrared signal is transmitted from an LED onboard the vehicle to this control module, the control module responds by producing a characteristic sound signal, which is then detected by the vehicle. This is how the whole system is able to dynamically determine the pick-up/delivery points
