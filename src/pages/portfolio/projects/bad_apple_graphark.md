---
layout:  /src/layouts/ProjectLayout.astro
title: 'Bad Apple in Graphark'
pubDate: 2025-07-22
description: 'Bad Apple but running inside Graphark.'
languages: ["cpp"]
image:
  url: "/images/projects/BadAppleGraphark.png"
  alt: "Thumbnail of Bad Apple Graphark project."
--- 

**Bad Apple Graphark** is my implementation of <a href="https://youtu.be/9lNZ_Rnr7Jc?si=yYmj8c8XyJ8eWuX_" target="_blank">Bad Apple</a> running inside my other project, [Graphark](/portfolio/projects/graphark).

Developed using **C++23**, **OpenCV** and **OpenGL**.

## 🧩 Features

- Audio and video
- Constant 30fps
- Zoom and pan
- Customizable shaders

## 💡 Technologies used

- C++23
- OpenGL
- OpenCV
- CMake
- Vcpkg

## 🎯 Objective

As a follow-up to Graphark, I created a renderer capable of playing the “Bad Apple” video entirely within the graphing calculator. To achieve this, I serialized each frame into a custom binary format, where every pixel was stored as a single bit, and then deserialized it for visualization. This project challenged me to optimize both data handling and rendering while keeping a consistent framerate.

🚀 *Developed by Jonark.*
