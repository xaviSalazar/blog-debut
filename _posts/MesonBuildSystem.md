---
title: "The Meson Build system!"
excerpt: "Easy to compile C, C++, D, Fortran, Java, Rust"
createdAt: "2022-01-10"
author: Victor-Salazar
---

## The Meson Build system

![Meson Build System](https://i.ytimg.com/vi/A3Pq3E1S8ss/maxresdefault.jpg)

>   Meson is an open source build system meant to be both extremely fast, and,
>   even more importantly, as user friendly as possible.

The main design point of Meson is that every moment a developer spends writing 
or debugging build definitions is a second wasted. So is every second spent 
waiting for the build system to actually start compiling code

The version provided by Ubuntu 18.04 (i.e. 0.45) is too old to manage properly
the dependencies declared by the project.
Since Meson is a python script, this is quite easy to install the latest
available version.

```
$ pip3 install meson
$ meson --version
0.60.1
$ sudo apt install ninja-build
```

To help Meson find the boost library, the following environment variables must
be declared.
The 2 following _exports_ have been defined in the shell RC file and are thus
automatically set in the console.

```
export BOOST_INCLUDEDIR=/usr/include/boost
export BOOST_LIBRARYDIR=/usr/lib
```