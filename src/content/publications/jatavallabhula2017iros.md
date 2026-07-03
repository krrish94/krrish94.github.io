---
key: jatavallabhula2017iros
order: 34
title: Shape Priors for Real-Time Monocular Object Localization in Dynamic Environments
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Sarthak Sharma
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: IROS
year: 2017
preview: /assets/img/publication_preview/iros2017.png
previewAlt: Car wireframes estimated by the method presented in this paper.
links:
  pdf: /assets/pdf/iros2017.pdf
  poster: /assets/pdf/iros2017_poster.pdf
  video: https://www.youtube.com/watch?v=Of-P34rWBBw
abstract: Reconstruction of dynamic objects in a scene is a highly challenging problem in the context of SLAM. In this paper, we present a real-time monocular object localization system that estimates the shape and pose of dynamic objects in real-time, using video frames captured from a moving monocular camera. Although the problem seems to be ill-posed, we demonstrate that, by incorporating prior knowledge of the object category, we can obtain more detailed instance-level reconstructions. As opposed to earlier object model specifications, the proposed shape-prior model leads to the formulation of a Bundle Adjustment-like optimization problem for simultaneous shape and pose estimation. Leveraging recent successes of Convolutional Neural Networks (CNNs) for object keypoint localization, we present a CNN architecture that performs precise keypoint localization. We then demonstrate how these keypoints can be used to recover 3D object properties, while accounting for any 2D localization errors and self-occlusion. We show significant performance improvements compared to state-of-the-art monocular competitors for 2D keypoint detection, as well as 3D localization and reconstruction of dynamic objects.
contrib: I did most of this work – part of my Masters thesis
bibtex: |-
  @inproceedings{jatavallabhula2017iros,
    title = {Shape Priors for Real-Time Monocular Object Localization in Dynamic Environments},
    author = {Jatavallabhula, {Krishna Murthy} and Sharma, Sarthak and K, {Madhava Krishna}},
    year = {2017},
    booktitle = {IROS},
  }
---
