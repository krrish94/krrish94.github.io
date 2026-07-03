---
key: splatam
order: 2
title: SplaTAM:Splat, Track, and Map 3D Gaussians for Dense RGB-D SLAM
authors:
  - name: Nikhil Keetha
    url: https://nik-v9.github.io/
  - name: Jay Karhade
    url: https://jaykarhade.github.io/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Gengshan Yang
  - name: Sebastian Scherer
    url: https://theairlab.org/team/sebastian/
  - name: Deva Ramanan
  - name: Jonathon Luiten
venue: CVPR
year: 2024
preview: /assets/img/publication_preview/splatam.gif
previewAlt: A gif depicting the 3D mapping process implemented as part of SplaTAM.
links:
  pdf: https://spla-tam.github.io/assets/SplaTAM.pdf
  website: https://spla-tam.github.io
  code: https://github.com/spla-tam/SplaTAM
  video: https://youtu.be/jWLI-OFp3qU
abstract: Dense simultaneous localization and mapping (SLAM) is pivotal for embodied scene understanding. Recent work has shown that 3D Gaussians enable high-quality reconstruction and real-time rendering of scenes using multiple posed cameras. In this light, we show for the first time that representing a scene by a 3D Gaussian Splatting radiance field can enable dense SLAM using a single unposed monocular RGB-D camera. Our method, SplaTAM, addresses the limitations of prior radiance field-based representations, including fast rendering and optimization, the ability to determine if areas have been previously mapped, and structured map expansion by adding more Gaussians. In particular, we employ an online tracking and mapping pipeline while tailoring it to specifically use an underlying Gaussian representation and silhouette-guided optimization via differentiable rendering. Extensive experiments on simulated and real-world data show that SplaTAM achieves up to 2 X state-of-the-art performance in camera pose estimation, map construction, and novel-view synthesis, demonstrating its superiority over existing approaches.
contrib: This project was spearheaded by Nikhil and Jonathon. I interfaced Gaussian Splatting with GradSLAM, and provided SLAM-specific guidance over the course of the project.
bibtex: |-
  @inproceedings{splatam,
    title = {SplaTAM:Splat, Track, and Map 3D Gaussians for Dense RGB-D SLAM},
    author = {Keetha, Nikhil and Karhade, Jay and Jatavallabhula, {Krishna Murthy} and Yang, Gengshan and Scherer, Sebastian and Ramanan, Deva and Luiten, Jonathon},
    year = {2024},
    booktitle = {CVPR},
  }
---
