---
key: parkhiya2018icra
order: 33
title: Constructing Category-Specific Models for Monocular Object SLAM
authors:
  - name: Parv Parkhiya
    url: https://parvparkhiya.github.io/
  - name: Rishabh Khawad
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
  - name: Brojeshwar Bhowmick
    url: https://sites.google.com/view/brojeshwar/home
venue: ICRA
year: 2018
preview: /assets/img/publication_preview/parkhiya2018icra.png
previewAlt: Representative object-SLAM results from the system presented in this paper.
links:
  pdf: http://arxiv.org/pdf/1802.09292.pdf
  video: https://youtu.be/_LpHrn1opSk
abstract: We present a new paradigm for real-time object-oriented SLAM with a monocular camera. Contrary to previous approaches, that rely on object-level models, we construct category-level models from CAD collections which are now widely available. To alleviate the need for huge amounts of labeled data, we develop a rendering pipeline that enables synthesis of large datasets from a limited amount of manually labeled data. Using data thus synthesized, we learn category-level models for object deformations in 3D, as well as discriminative object features in 2D. These category models are instance-independent and aid in the design of object landmark observations that can be incorporated into a generic monocular SLAM framework. Where typical object-SLAM approaches usually solve only for object and camera poses, we also estimate object shape on-the-fly, allowing for a wide range of objects from the category to be present in the scene. Moreover, since our 2D object features are learned discriminatively, the proposed object-SLAM system succeeds in several scenarios where sparse feature-based monocular SLAM fails due to insufficient features or parallax. Also, the proposed category-models help in object instance retrieval, useful for Augmented Reality (AR) applications. We evaluate the proposed framework on multiple challenging real-world scenes and show — to the best of our knowledge — first results of an instance-independent monocular object-SLAM system and the benefits it enjoys over feature-based SLAM methods.
tldr: We present a monocular object SLAM system that uses category-level object representations as object observations
contrib: Parv implemented bulk of the object SLAM backend. Rishabh implemented the frontend. I proposed this project and mentored Parv and Rishabh, and wrote bulk of the manuscript.
bibtex: |-
  @inproceedings{parkhiya2018icra,
    title = {Constructing Category-Specific Models for Monocular Object SLAM},
    author = {Parkhiya, Parv and Khawad, Rishabh and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna} and Bhowmick, Brojeshwar},
    year = {2018},
    booktitle = {ICRA},
  }
---
