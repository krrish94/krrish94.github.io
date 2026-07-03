---
key: jatavallabhula2017icra
order: 35
title: "Reconstructing Vehicles From a Single Image: Shape Priors for Road Scene Understanding"
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Sai Krishna Gottipati
    url: https://saikrishna-1996.github.io/
  - name: Falak Chhaya
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: ICRA
year: 2017
preview: /assets/img/publication_preview/icra2017.png
previewAlt: Car wireframes estimated by the method presented in this paper.
links:
  pdf: /assets/pdf/icra2017.pdf
  poster: /assets/pdf/icra2017_poster.pdf
  video: https://youtu.be/rSMjHZV4axg
abstract: We present an approach for reconstructing vehicles from a single (RGB) image, in the context of autonomous driving. Though the problem appears to be ill-posed, we demonstrate that prior knowledge about how 3D shapes of vehicles project to an image can be used to reason about the reverse process, i.e., how shapes (back-)project from 2D to 3D. We encode this knowledge in shape priors, which are learnt over a small keypoint-annotated dataset. We then formulate a shape-aware adjustment problem that uses the learnt shape priors to recover the 3D pose and shape of a query object from an image. For shape representation and inference, we leverage recent successes of Convolutional Neural Networks (CNNs) for the task of object and keypoint localization, and train a novel cascaded fully-convolutional architecture to localize vehicle keypoints in images. The shape-aware adjustment then robustly recovers shape (3D locations of the detected keypoints) while simultaneously filling in occluded keypoints. To tackle estimation errors incurred due to erroneously detected keypoints, we use an Iteratively Re-weighted Least Squares (IRLS) scheme for robust optimization, and as a by-product characterize noise models for each predicted keypoint. We evaluate our approach on autonomous driving benchmarks, and present superior results to existing monocular, as well as stereo approaches.
contrib: I did most of this work – part of my Masters thesis
bibtex: |-
  @inproceedings{jatavallabhula2017icra,
    title = {Reconstructing Vehicles From a Single Image: Shape Priors for Road Scene Understanding},
    author = {Jatavallabhula, {Krishna Murthy} and Gottipati, {Sai Krishna} and Chhaya, Falak and K, {Madhava Krishna}},
    year = {2017},
    booktitle = {ICRA},
  }
---
