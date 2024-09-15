---
title: "Linux Utils I currently use !"
excerpt: "Task I am constantly searching how to do"
createdAt: "2024-09-15"
author: Victor-Salazar
---

# UTILS FOR LINUX
## Set up an automatic SSH login on Linux
[Click here for tutorial](https://alexandra-zaharia.github.io/posts/set-up-automatic-ssh-login-on-linux)

## Verify cuda is inside 
Install with pip onnxruntime first,
then tap python
```
import onnxruntime as ort
ort.get_available_providers()
```
Example results
```                                                          
Python 3.10.12 (main, Jul 29 2024, 16:56:48) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import onnxruntime as ort
>>> ort.get_available_providers()
['TensorrtExecutionProvider', 'CUDAExecutionProvider', 'AzureExecutionProvider', 'CPUExecutionProvider']
>>> 
```
### Commands to see space memory used
Use du (Disk Usage) Command: The du command is used to estimate file space usage. You can run it to see which directories are using the most space.
```
sudo du -h --max-depth=1 /
```
This command will display the disk usage of directories within the root (/) directory. The -h flag makes the output human-readable, and --max-depth=1 limits the output to the top-level directories, so you don't get overwhelmed with information.

Check Specific Directories: After identifying which directories are consuming the most space, you can drill down further by running the du command on those specific directories. For example, if /var is using a lot of space, you can check its subdirectories:
```
sudo du -h --max-depth=1 /var
```
Check for Large Files: You can also find large files specifically with the find command:
```
sudo find / -type f -size +100M -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
```
This command will find files larger than 100 MB and display their sizes and paths.

Examine Log Files: Sometimes, large log files can occupy significant space. You can check the /var/log directory:
