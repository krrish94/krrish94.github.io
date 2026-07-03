---
key: ctcnet
order: 31
title: Geometric Consistency for Self-Supervised End-to-End Visual Odometry
authors:
  - name: Ganesh Iyer
    url: https://epiception.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Gunshi Gupta
    url: https://gunshigupta.netlify.app/
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
  - name: Liam Paull
    url: https://liampaull.ca/
venue: CVPR Workshops
year: 2018
preview: /assets/img/publication_preview/ctcnet.png
previewAlt: Neural network architecture for geometrically-supervised visual odometry prediction.
links:
  pdf: http://arxiv.org/pdf/1804.03789.pdf
  website: https://krrish94.github.io/CTCNet-release/
  code: https://github.com/krrish94/CTCNet-release
abstract: With the success of deep learning based approaches in tackling challenging problems in computer vision, a wide range of deep architectures have recently been proposed for the task of visual odometry (VO) estimation. Most of these proposed solutions rely on supervision, which requires the acquisition of precise ground-truth camera pose information, collected using expensive motion capture systems or high-precision IMU/GPS sensor rigs. In this work, we propose an unsupervised paradigm for deep visual odometry learning. We show that using a noisy teacher, which could be a standard VO pipeline, and by designing a loss term that enforces geometric consistency of the trajectory, we can train accurate deep models for VO that do not require ground-truth labels. We leverage geometry as a self-supervisory signal and propose "Composite Transformation Constraints (CTCs)", that automatically generate supervisory signals for training and enforce geometric consistency in the VO estimate. We also present a method of characterizing the uncertainty in VO estimates thus obtained. To evaluate our VO pipeline, we present exhaustive ablation studies that demonstrate the efficacy of end-to-end, self-supervised methodologies to train deep models for monocular VO. We show that leveraging concepts from geometry and incorporating them into the training of a recurrent neural network results in performance competitive to supervised deep VO methods.
tldr: We use the compositional property of transformations to self-supervise learning of visual odometry from images
contrib: Ganesh contributed to this work more than me. I came up with the idea, but he got this to work.
bibtex: |-
  @inproceedings{ctcnet,
    title = {Geometric Consistency for Self-Supervised End-to-End Visual Odometry},
    author = {Iyer, Ganesh and Jatavallabhula, {Krishna Murthy} and Gupta, Gunshi and K, {Madhava Krishna} and Paull, Liam},
    year = {2018},
    booktitle = {CVPR Workshops},
  }
---
