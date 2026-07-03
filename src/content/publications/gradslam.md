---
key: gradslam
order: 21
title: "gradSLAM: Dense SLAM meets automatic differentiation"
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Ganesh Iyer
    url: https://epiception.github.io/
  - name: Liam Paull
    url: https://liampaull.ca/
venue: ICRA
year: 2020
selected: true
featured: true
preview: /assets/img/publication_preview/gradslam.png
previewAlt: An overview of the various components of gradSLAM
links:
  pdf: http://arxiv.org/pdf/1910.10672.pdf
  website: https://gradslam.github.io/
  code: https://github.com/gradslam/gradslam
  video: https://www.youtube.com/watch?v=2ygtSJTmo08
abstract: The question of “representation” is central in the context of dense simultaneous localization and mapping (SLAM). Newer learning-based approaches have the potential to leverage data or task performance to directly inform the choice of representation. However, learning representations for SLAM has been an open question, because traditional SLAM systems are not end-to-end differentiable. In this work, we present gradSLAM, a differentiable computational graph take on SLAM. Leveraging the automatic differentiation capabilities of computational graphs, gradSLAM enables the design of SLAM systems that allow for gradient-based learning across each of their components, or the system as a whole. This is achieved by creating differentiable alternatives for each non-differentiable component in a typical dense SLAM system. Specifically, we demonstrate how to design differentiable trust-region optimizers, surface measurement and fusion schemes, as well as differentiate over rays, without sacrificing performance. This amalgamation of dense SLAM with computational graphs enables us to backprop all the way from 3D maps to 2D pixels, opening up new possibilities in gradient-based learning for SLAM.
tldr: We present end-to-end differentiable dense SLAM systems that open up new possibilites for integrating deep learning and SLAM
contrib: I came up with the idea and led this work. Ganesh Iyer was instrumental with implementing the surfel and point-based fusion pipelines.
bibtex: |-
  @inproceedings{gradslam,
    title = {gradSLAM: Dense SLAM meets automatic differentiation},
    author = {Jatavallabhula, {Krishna Murthy} and Iyer, Ganesh and Paull, Liam},
    year = {2020},
    booktitle = {ICRA},
    featured = {true}
  }
---
