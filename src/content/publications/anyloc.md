---
key: anyloc
order: 10
title: "AnyLoc: Towards Universal Visual Place Recognition"
authors:
  - name: Nikhil Keetha
    url: https://nik-v9.github.io/
    equal: true
  - name: Avneesh Mishra
    url: https://theprojectsguy.github.io/
    equal: true
  - name: Jay Karhade
    url: https://jaykarhade.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Sebastian Scherer
    url: https://theairlab.org/team/sebastian/
  - name: Madhava Krishna
    url: https://robotics.iiit.ac.in/
  - name: Sourav Garg
    url: https://researchers.adelaide.edu.au/profile/sourav.garg
venue: Robotics and Automation Letters (and ICRA 2024)
year: 2023
preview: /assets/img/publication_preview/anyloc.gif
previewAlt: A gif depicting the various kinds of scenes (outdoors, indoors, underwater, aerial) that AnyLoc was deployed in.
links:
  pdf: https://arxiv.org/pdf/2308.00688.pdf
  code: https://github.com/AnyLoc/AnyLoc
  video: https://youtu.be/ITo8rMInatk
abstract: "VPR is vital for robot localization. To date, the most performant VPR approaches are environment- and task-specific: while they exhibit strong performance in structured environments (predominantly urban driving), their performance degrades severely in unstructured environments, rendering most approaches brittle to robust realworld deployment. In this work, we develop a universal solution to VPR – a technique that works across a broad range of structured and unstructured environments (urban, outdoors, indoors, aerial, underwater, and subterranean environments) without any re-training or finetuning. We demonstrate that general-purpose feature representations derived from off-theshelf self-supervised models with no VPR-specific training are the right substrate upon which to build such a universal VPR solution. Combining these derived features with unsupervised feature aggregation enables our suite of methods, AnyLoc, to achieve up to 4× significantly higher performance than existing approaches. We further obtain a 6 percent improvement in performance by characterizing the semantic properties of these features, uncovering unique domains which encapsulate datasets from similar environments. Our detailed experiments and analysis lay a foundation for building VPR solutions that may be deployed anywhere, anytime, and across anyview."
contrib: Nikhil, Avneesh, and Jay equally led this work. Sourav and I closely mentored them on this work (Sourav more closely than me).
bibtex: |-
  @inproceedings{anyloc,
    title = {AnyLoc: Towards Universal Visual Place Recognition},
    author = {Keetha, Nikhil and Mishra, Avneesh and Karhade, Jay and Jatavallabhula, {Krishna Murthy} and Scherer, Sebastian and Krishna, Madhava and Garg, Sourav},
    year = {2023},
    booktitle = {Robotics and Automation Letters (and ICRA 2024)},
  }
---
