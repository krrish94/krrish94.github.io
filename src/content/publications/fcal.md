---
key: fcal
order: 17
title: "f -Cal: Calibrated aleatoric uncertainty estimation from neural networks for robot perception"
authors:
  - name: Dhaivat Bhatt
    url: https://dhaivat1729.github.io/
    equal: true
  - name: Kaustubh Mani
    url: https://hbutsuak95.github.io/
    equal: true
  - name: Dishank Bansal
    url: https://dishank-b.github.io/
  - name: Hanju Lee
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Liam Paull
    url: https://liampaull.ca/
venue: ICRA
year: 2022
preview: /assets/img/publication_preview/fcal.gif
previewAlt: Sample object detection (and uncertainty estimates) from our approach.
links:
  pdf: https://f-cal.github.io/pdf/f-Cal-preprint.pdf
  website: https://f-cal.github.io/
  code: https://github.com/f-cal/f_cal
  video: https://youtu.be/2JVVfySNATM
abstract: f-Cal is calibration method for probabilistic regression networks. Typical Bayesian neural networks are overconfident in their predictions. For these predictions to be used in downstream tasks, reliable and calibrated uncertainity estimates are critical. f-Cal proposes a simple loss function to remedy this; this can be employed to train any probabilistic neural regressor to produced calibrated estimates of aleatoric uncertainty.
tldr: We present a simple approach that uses a variational loss to enforce calibration in probabilistic regression networks
contrib: Dhaivat and Kaustubh contributed equally to the experiments. Dishank implemented very early prototypes. Liam came up with this idea. I mentored Dhaivat and Kaustubh closely on this work.
bibtex: |-
  @inproceedings{fcal,
    title = {f -Cal: Calibrated aleatoric uncertainty estimation from neural networks for robot perception},
    author = {Bhatt, Dhaivat and Mani, Kaustubh and Bansal, Dishank and Lee, Hanju and Jatavallabhula, {Krishna Murthy} and Paull, Liam},
    year = {2022},
    booktitle = {ICRA},
  }
---
