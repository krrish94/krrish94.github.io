---
key: muhle2023cvpr
order: 14
title: Learning Correspondence Uncertainty via Differentiable Nonlinear Least Squares
authors:
  - name: Dominik Muhle
    url: https://dominikmuhle.github.io/
  - name: Lukas Koestler
    url: https://lukaskoestler.com/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Daniel Cremers
    url: https://cvg.cit.tum.de/members/cremers
venue: CVPR
year: 2023
preview: /assets/img/publication_preview/muhle2023cvpr.gif
previewAlt: A gif depicting the uncertainty estimation results over an autonomous driving sequence from KITTI.
links:
  website: https://dominikmuhle.github.io/dnls_covs/
abstract: We propose a differentiable nonlinear least squares framework to account for uncertainty in relative pose estimation from feature correspondences. Specifically, we introduce a symmetric version of the probabilistic normal epipolar constraint, and an approach to estimate the covariance of feature positions by differentiating through the camera pose estimation procedure. We evaluate our approach on synthetic, as well as the KITTI and EuRoC real-world datasets. On the synthetic dataset, we confirm that our learned covariances accurately approximate the true noise distribution. In real world experiments, we find that our approach consistently outperforms state-of-the-art non-probabilistic and probabilistic approaches, regardless of the feature extraction algorithm of choice.
contrib: Work led entirely by Dominik, and Lukas assisted with the formulation of several technical details. Daniel and I offered overarching guidance and support.
bibtex: |-
  @inproceedings{muhle2023cvpr,
    title = {Learning Correspondence Uncertainty via Differentiable Nonlinear Least Squares},
    author = {Muhle, Dominik and Koestler, Lukas and Jatavallabhula, {Krishna Murthy} and Cremers, Daniel},
    year = {2023},
    booktitle = {CVPR},
  }
---
