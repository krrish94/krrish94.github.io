---
key: draco
order: 19
title: "DRACO: Weakly supervised dense reconstruction and canonicalization of objects"
authors:
  - name: Rahul Sajnani
    url: https://scholar.google.com/citations?user=HAtfBjoAAAAJ&hl=en
    equal: true
  - name: Aadil Mehdi Sanchawala
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Srinath Sridhar
    url: https://cs.brown.edu/people/ssrinath
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: ICRA
year: 2022
preview: /assets/img/publication_preview/draco.png
previewAlt: A few representative results from our system - DRACO.
links:
  pdf: https://aadilmehdis.github.io/DRACO-Project-Page/content/2021_ICRA_DRACO.pdf
  website: https://aadilmehdis.github.io/DRACO-Project-Page/
  code: https://github.com/RahulSajnani/DRACO-Weakly-Supervised-Dense-Reconstruction-And-Canonicalization-of-Objects
  video: https://youtu.be/jdvLaBw-pN4
abstract: We present DRACO, a method for Dense Reconstruction And Canonicalization of Object shape from one or more RGB images. Canonical shape reconstruction; estimating 3D object shape in a coordinate space canonicalized for scale, rotation, and translation parameters—is an emerging paradigm that holds promise for a multitude of robotic applications. Prior approaches either rely on painstakingly gathered dense 3D supervision, or produce only sparse canonical representations, limiting real-world applicability. DRACO performs dense canonicalization using only weak supervision in the form of camera poses and semantic keypoints at train time. During inference, DRACO predicts dense object-centric depth maps in a canonical coordinate-space, solely using one or more RGB images of an object. Extensive experiments on canonical shape reconstruction and pose estimation show that DRACO is competitive or superior to fully-supervised methods.
tldr: We present a weakly supervised approach that reconstructs objects in a canonical coordinate space
contrib: I mentored Rahul and Aadil on this project. Srinath and Madhav were the lead PIs, and likely contributed more than me.
bibtex: |-
  @inproceedings{draco,
    title = {DRACO: Weakly supervised dense reconstruction and canonicalization of objects},
    author = {Sajnani, Rahul and Sanchawala, {Aadil Mehdi} and Jatavallabhula, {Krishna Murthy} and Sridhar, Srinath and K, {Madhava Krishna}},
    year = {2022},
    booktitle = {ICRA},
  }
---
