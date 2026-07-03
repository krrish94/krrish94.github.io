---
key: nair2020iv
order: 24
title: Multi-object monocular SLAM for dynamic environments
authors:
  - name: Gokul Nair
  - name: Swapnil Daga
  - name: Rahul Sajnani
    url: https://scholar.google.com/citations?user=HAtfBjoAAAAJ&hl=en
  - name: Anirudha Ramesh
  - name: Junaid Ahmed Ansari
    url: https://junaidcs032.github.io/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: Intelligent Vehicles Symposium (IV)
year: 2020
recognition: Finalist - Best Student Paper Award
preview: /assets/img/publication_preview/nair2020iv.png
previewAlt: An illustration of our pipeline involving shape and pose optimization of road vehicles.
links:
  pdf: https://arxiv.org/pdf/2002.03528.pdf
  video: https://www.bilibili.com/video/av90800325/
abstract: In this paper, we tackle the problem of multibody SLAM from a monocular camera. The term multibody, implies that we track the motion of the camera, as well as that of other dynamic participants in the scene. The quintessential challenge in dynamic scenes is unobservability; it is not possible to unambiguously triangulate a moving object from a moving monocular camera. Existing approaches solve restricted variants of the problem, but the solutions suffer relative scale ambiguity (i.e., a family of infinitely many solutions exist for each pair of motions in the scene). We solve this rather intractable problem by leveraging single-view metrology, advances in deep learning, and category-level shape estimation. We propose a multi posegraph optimization formulation, to resolve the relative and absolute scale factor ambiguities involved. This optimization helps us reduce the average error in trajectories of multiple bodies over real-world datasets, such as KITTI. To the best of our knowledge, our method is the first practical monocular multi-body SLAM system to perform dynamic multi-object and ego localization in a unified framework in metric scale.
tldr: We present a monocular object SLAM system that tracks not just the camera, but also other moving objects in the scene
contrib: I mentored Gokul and Swapnil on this project. I also wrote a part of the manuscript.
bibtex: |-
  @inproceedings{nair2020iv,
    title = {Multi-object monocular SLAM for dynamic environments},
    author = {Nair, Gokul and Daga, Swapnil and Sajnani, Rahul and Ramesh, Anirudha and Ansari, {Junaid Ahmed} and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2020},
    booktitle = {Intelligent Vehicles Symposium (IV)},
    recognition = {Finalist - Best Student Paper Award}
  }
---
