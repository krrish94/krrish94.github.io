---
key: autolay
order: 22
title: "AutoLay: Benchmarking Monocular Layout Estimation"
authors:
  - name: Kaustubh Mani
    url: https://hbutsuak95.github.io/
    equal: true
  - name: Sai Shankar
    url: https://saishankarn.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: IROS
year: 2020
preview: /assets/img/publication_preview/autolay.png
previewAlt: A preview of the AutoLay benchmark for estimating the bird’s-eye view layout of a road scene.
links:
  pdf: https://arxiv.org/pdf/2108.09047.pdf
  website: https://autolay.github.io/
  code: https://github.com/hbutsuak95/AutoLay
abstract: Amodal layout estimation is the task of estimating a semantic occupancy map in bird’s-eye view, given a monocular image or video. The term amodal implies that we estimate occupancy and semantic labels even for parts of the world that are occluded in image space. In this work, we introduce AutoLay, a new dataset and benchmark for this task. AutoLay provides annotations in 3D, in bird’s-eye view, and in image space. We provide high quality labels for sidewalks, vehicles, crosswalks, and lanes. We evaluate several approaches on sequences from the KITTI and Argoverse datasets.
tldr: We present a dataset and introduce a new benchmark for *amodal* layout estimation from monocular imagery
contrib: Kaustubh led this work. I came up with the idea, mentored Kaustubh (admittedly, relatively sparsely), and helped write some of the manuscript. Sai, and particularly Kaustubh, were instrumental in driving this work to completion.
bibtex: |-
  @inproceedings{autolay,
    title = {AutoLay: Benchmarking Monocular Layout Estimation},
    author = {Mani, Kaustubh and Shankar, Sai and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2020},
    booktitle = {IROS},
  }
---
