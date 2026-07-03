---
key: ansari2018steep
order: 29
title: "The Earth ain’t Flat: Monocular Reconstruction of Vehicles on Steep and Graded Roads from a Moving Camera"
authors:
  - name: Junaid Ahmed Ansari
    url: https://junaidcs032.github.io/
    equal: true
  - name: Sarthak Sharma
    equal: true
  - name: Anshuman Majumdar
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: IROS
year: 2018
preview: /assets/img/publication_preview/iros2018.png
previewAlt: An image showing vehicles on steep and graded roads being reconstructed as wireframes, on synthetic as well as real datasets.
links:
  pdf: http://arxiv.org/pdf/1803.02057.pdf
  video: https://www.youtube.com/watch?v=KQZFa5_IvpU
abstract: Accurate localization of other traffic participants is a vital task in autonomous driving systems. State-of-the-art systems employ a combination of sensing modalities such as RGB cameras and LiDARs for localizing traffic participants, but most such demonstrations have been confined to plain roads. We demonstrate, to the best of our knowledge, the first results for monocular object localization and shape estimation on surfaces that do not share the same plane with the moving monocular camera. We approximate road surfaces by local planar patches and use semantic cues from vehicles in the scene to initialize a local bundle-adjustment like procedure that simultaneously estimates the pose and shape of the vehicles, and the orientation of the local ground plane on which the vehicle stands as well. We evaluate the proposed approach on the KITTI and SYNTHIA-SF benchmarks, for a variety of road plane configurations. The proposed approach significantly improves the state-of-the-art for monocular object localization on arbitrarily-shaped roads.
tldr: We demonstrate monocular object localization and wireframe (shape) estimation on extremely steep and graded roads
contrib: Junaid and Sarthak led this work. I mentored them closely on this project and helped write the manuscript.
bibtex: |-
  @inproceedings{ansari2018steep,
    title = {The Earth ain’t Flat: Monocular Reconstruction of Vehicles on Steep and Graded Roads from a Moving Camera},
    author = {Ansari, {Junaid Ahmed} and Sharma, Sarthak and Majumdar, Anshuman and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2018},
    booktitle = {IROS},
  }
---
