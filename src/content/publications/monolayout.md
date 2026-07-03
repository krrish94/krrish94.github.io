---
key: monolayout
order: 23
title: "MonoLayout: Amodal scene layout from a single image"
authors:
  - name: Kaustubh Mani
    url: https://hbutsuak95.github.io/
  - name: Swapnil Daga
  - name: Shubhika Garg
  - name: Sai Shankar
    url: https://saishankarn.github.io/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: WACV
year: 2020
preview: /assets/img/publication_preview/monolayout.png
previewAlt: Bird’s-eye view layouts estimated by MonoLayout.
links:
  pdf: http://arxiv.org/pdf/2002.08394.pdf
  website: https://hbutsuak95.github.io/monolayout/
  code: https://github.com/hbutsuak95/monolayout
  video: https://www.youtube.com/watch?v=HcroGyo6yRQ
abstract: In this paper, we address the novel, highly challenging problem of estimating the layout of a complex urban driving scenario. Given a single color image captured from a driving platform, we aim to predict the bird’s-eye view layout of the road and other traffic participants. The estimated layout should reason beyond what is visible in the image, and compensate for the loss of 3D information due to projection. We dub this problem "amodal scene layout estimation", which involves hallucinating scene layout for even parts of the world that are occluded in the image. To this end, we present MonoLayout, a deep neural network for real-time amodal scene layout estimation from a single image. MonoLayout maps a color image of a scene into a multi-channel occupancy grid in bird’s-eye view, where each channel represents occupancy probabilities of various scene components. We represent scene layout as a multi-channel semantic occupancy grid, and leverage adversarial feature learning to hallucinate plausible completions for occluded image parts. We extend several state-of-the-art approaches for road-layout estimation and vehicle occupancy estimation in bird’s-eye view to the amodal setup and thoroughly evaluate against them. By leveraging temporal sensor fusion to generate training labels, we significantly outperform current art over a number of datasets.
tldr: We present a neural network that "hallucinates" the layout of a road scene from a single image, including scene parts that are outside the bounds of the image
contrib: Kaustubh led this work. I came up with the idea, served as mentor, and helped write bulk of the manuscript.
bibtex: |-
  @inproceedings{monolayout,
    title = {MonoLayout: Amodal scene layout from a single image},
    author = {Mani, Kaustubh and Daga, Swapnil and Garg, Shubhika and Shankar, Sai and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2020},
    booktitle = {WACV},
  }
---
