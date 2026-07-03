---
key: bodiffsim
order: 16
title: Rethinking Optimization with Differentiable Simulation from a Global Perspective
authors:
  - name: Rika Antonova
    url: https://contactrika.github.io/
    equal: true
  - name: Jingyun Yang
    url: https://yjy0625.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Jeannette Bohg
    url: https://web.stanford.edu/~bohg/
venue: CoRL
year: 2022
recognition: Oral presentation (top 6.5 percent of submissions)
preview: /assets/img/publication_preview/bodiffsim.jpg
previewAlt: A didactic figure explaining our core algorithm, and showing some environments we use for evaluation.
links:
  pdf: https://arxiv.org/pdf/2207.00167.pdf
  website: https://yjy0625.github.io/projects/globdiff/
  video: https://yjy0625.github.io/projects/globdiff/video/rethinking-diffsim.mp4
abstract: Differentiable simulation is a promising toolkit for fast gradient-based policy optimization and system identification. In this work, we study the challenges that differentiable simulation presents when it is not feasible to expect that a single descent reaches a global optimum. We analyze the optimization landscapes of diverse scenarios and find that in dynamic environments with highly deformable objects and fluids, differentiable simulators produce rugged landscapes with useful gradients. We propose a method that combines Bayesian optimization with semi-local leaps to obtain a global search method that can use gradients effectively and maintain robust performance in regions with noisy gradients. We show extensive experiments in simulation, and also validate the method in a real robot setup.
tldr: We show that differentiable simulations present difficult optimization landscapes and address this with a method that combines global and local optimization
contrib: Rika and Jingyun did nearly all of the work. I was consulted primarily for advice on differentiable simulation. I helped write a few parts of the manuscript.
bibtex: |-
  @inproceedings{bodiffsim,
    title = {Rethinking Optimization with Differentiable Simulation from a Global Perspective},
    author = {Antonova, Rika and Yang, Jingyun and Jatavallabhula, {Krishna Murthy} and Bohg, Jeannette},
    year = {2022},
    booktitle = {CoRL},
    recognition = {Oral presentation (top 6.5 percent of submissions)}
  }
---
