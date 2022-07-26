---
title: "How to use jetson nano SPI!"
excerpt: "SPI jetson nano"
createdAt: "2022-06-12"
author: Victor-Salazar
---

First check jetson nano's TEGRA
```
cat /etc/nv_tegra_release
```

```
# R28 (release), REVISION: 1.0, GCID: [an ID], BOARD: t186ref, EABI: aarch64, DATE: Thu Jul 20 07:59:31 UTC 2017
```

There’s the information. The release is R28 and revision is 1.0 which gives L4T 28.1.0. The BOARD parameter indicates the t186ref which is a Jetson TX2 Development Kit.


Enable SPI in jetson nano 

If you’re running JetPack 4.3, Linux For Tegra 32.3.1, use the new jetson-io tool to enable spidev.

[linktoforum](https://docs.nvidia.com/jetson/archives/l4t-archived/l4t-3231/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fhw_setup_jetson_io.html%23 136)

If running an older version, try the following…

[linktoolderversion](https://devtalk.nvidia.com/default/topic/1062646/jetson-nano/updated-instructions-for-spi-on-nano-developmentkit-with-l4t-32-2-1/1 45)

After adding any spi. Do not forget to put command

```
modprobe spidev
```
