---
title: "Retrieve IP address in your network!"
excerpt: "Important used command in linux."
createdAt: "2022-05-28"
author: Victor-Salazar
---
Use command below to search for SSH servers on your local network.

`sudo nmap -Pn -p 22 -n 192.168.3.0/23 | less -p open`

Then use `/` within `less` to search for the MAC address of the board.
The IP address to use is the one printed above the MAC address.
Then use `q` to quit `less`.
