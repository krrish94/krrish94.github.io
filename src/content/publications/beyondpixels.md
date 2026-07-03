---
key: beyondpixels
order: 32
title: "Beyond Pixels: Leveraging Geometry and Shape Cues for Multi-Object Tracking"
authors:
  - name: Sarthak Sharma
    equal: true
  - name: Junaid Ahmed Ansari
    url: https://junaidcs032.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: ICRA
year: 2018
preview: /assets/img/publication_preview/beyondpixels.png
previewAlt: Sample multi-object tracking results from our approach when evaluated on the KITTI dataset.
links:
  pdf: http://arxiv.org/pdf/1802.09298.pdf
  website: https://junaidcs032.github.io/Geometry_ObjectShape_MOT/
  code: https://github.com/JunaidCS032/MOTBeyondPixels
  video: https://youtu.be/SfoK8u2_s-o
abstract: This paper introduces geometry and object shape and pose costs for multi-object tracking in urban driving scenarios. Using images from a monocular camera alone, we devise pairwise costs for object tracks, based on several 3D cues such as object pose, shape, and motion. The proposed costs are agnostic to the data association method and can be incorporated into any optimization framework to output the pairwise data associations. These costs are easy to implement, can be computed in real-time, and complement each other to account for possible errors in a tracking-by-detection framework. We perform an extensive analysis of the designed costs and empirically demonstrate consistent improvement over the state-of-the-art under varying conditions that employ a range of object detectors, exhibit a variety in camera and object motions, and, more importantly, are not reliant on the choice of the association framework. We also show that, by using the simplest of associations frameworks (two-frame Hungarian assignment), we surpass the state-of-the-art in multi-object-tracking on road scenes.
tldr: We present a monocular multi-object tracker that uses simple 3D cues and obtained (in 2018) state-of-the-art results.
contrib: I came up with this idea and mentored Sarthak and Junaid on this work. I also wrote most of the manuscript.
bibtex: |-
  @inproceedings{beyondpixels,
    title = {Beyond Pixels: Leveraging Geometry and Shape Cues for Multi-Object Tracking},
    author = {Sharma, Sarthak and Ansari, {Junaid Ahmed} and Jatavallabhula, {Krishna Murthy} and and K, {Madhava Krishna}},
    year = {2018},
    booktitle = {ICRA},
  }
---
