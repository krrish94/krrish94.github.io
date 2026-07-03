---
key: pacnerf
order: 13
title: "PAC-NeRF: Physics Augmented Continuum Neural Radiance Fields for Geometry-Agnostic System Identification"
authors:
  - name: Xuan Li
    url: https://xuan-li.github.io/
  - name: Yi-Ling Qiao
    url: https://ylqiao.net/
  - name: Peter Yichen Chen
    url: https://peterchencyc.com/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Ming Lin
    url: https://www.cs.umd.edu/~lin/
  - name: Chenfanfu Jiang
    url: https://www.math.ucla.edu/~cffjiang/
  - name: Chuang Gan
    url: https://people.csail.mit.edu/ganchuang/
venue: ICLR
year: 2023
recognition: Notable top 25 (top 25 percent of accepted submissions)
preview: /assets/img/publication_preview/pacnerf.gif
previewAlt: A demo from PAC-NeRF – estimating the geometry and physical properties of a deformable torus
links:
  pdf: https://openreview.net/pdf?id=tVkrbkz42vc
  website: https://sites.google.com/view/pac-nerf/overview?authuser=0
  code: https://github.com/xuan-li/PAC-NeRF
abstract: Existing approaches to system identification (estimating the physical parameters of an object) from videos assume known object geometries. This precludes their applicability in a vast majority of scenes where object geometries are complex or unknown. In this work, we aim to identify parameters characterizing a physical system from a set of multi-view videos without any assumption on object geometry or topology. To this end, we propose "Physics Augmented Continuum Neural Radiance Fields" (PAC-NeRF), to estimate both the unknown geometry and physical parameters of highly dynamic objects from multi-view videos. We design PAC-NeRF to only ever produce physically plausible states by enforcing the neural radiance field to follow the conservation laws of continuum mechanics. For this, we design a hybrid Eulerian-Lagrangian representation of the neural radiance field, i.e., we use the Eulerian grid representation for NeRF density and color fields, while advecting the neural radiance fields via Lagrangian particles. This hybrid Eulerian-Lagrangian representation seamlessly blends efficient neural rendering with the material point method (MPM) for robust differentiable physics simulation. We validate the effectiveness of our proposed framework on geometry and physical parameter estimation over a vast range of materials, including elastic bodies, plasticine, sand, Newtonian and non-Newtonian fluids, and demonstrate significant performance gain on most tasks.
tldr: We integrate a differentiable physics engine with neural radiance fields for simulatneous estimation of geometry and physical properties from multi-view videos
contrib: Work primarily done by Xuan when interning with Chuang, who was the lead PI. Chuang came up with the central pitch for this work. I helped design the real-world experiments. My biggest contribution to this project was perhaps that I wrote up bulk of the manuscript.
bibtex: |-
  @inproceedings{pacnerf,
    title = {PAC-NeRF: Physics Augmented Continuum Neural Radiance Fields for Geometry-Agnostic System Identification},
    author = {Li, Xuan and Qiao, Yi-Ling and Chen, {Peter Yichen} and Jatavallabhula, {Krishna Murthy} and Lin, Ming and Jiang, Chenfanfu and Gan, Chuang},
    year = {2023},
    booktitle = {ICLR},
    recognition = {Notable top 25 (top 25 percent of accepted submissions)},
  }
---
