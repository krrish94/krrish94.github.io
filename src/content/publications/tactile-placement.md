---
key: tactile-placement
order: 5
title: Tactile Estimation of Extrinsic Contact Patch for Stable Placement
authors:
  - name: Kei Ota
    url: https://keiohta.github.io/
  - name: Devesh Jha
    url: https://www.merl.com/people/jha
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Asako Kanezaki
    url: https://kanezaki.github.io/
  - name: Joshua B. Tenenbaum
    url: http://web.mit.edu/cocosci/josh.html
venue: ICRA
year: 2024
preview: /assets/img/publication_preview/stable-placement.gif
previewAlt: A robot gently stacking two light-weight objects using tactile sensing and our proposed method.
links:
  pdf: https://arxiv.org/pdf/2309.14552.pdf
abstract: Precise perception of contact interactions is essential for the fine-grained manipulation skills for robots. In this paper, we present the design of feedback skills for robots that must learn to stack complex-shaped objects on top of each other. To design such a system, a robot should be able to reason about the stability of placement from very gentle contact interactions. Our results demonstrate that it is possible to infer the stability of object placement based on tactile readings during contact formation between the object and its environment. In particular, we estimate the contact patch between a grasped object and its environment using force and tactile observations to estimate the stability of the object during a contact formation. The contact patch could be used to estimate the stability of the object upon the release of the grasp. The proposed method is demonstrated on various pairs of objects that are used in a very popular board game.
contrib: Kei and Devesh did much of the work. I was consulted for advice with tactile sensors and problem framing.
bibtex: |-
  @inproceedings{tactile-placement,
    title = {Tactile Estimation of Extrinsic Contact Patch for Stable Placement},
    author = {Ota, Kei and Jha, Devesh and Jatavallabhula, {Krishna Murthy} and Kanezaki, Asako and Tenenbaum, {Joshua B.}},
    year = {2024},
    booktitle = {ICRA},
  }
---
