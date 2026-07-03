---
key: conceptfusion
order: 12
title: "ConceptFusion: Open-set Multimodal 3D Mapping"
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Alihusein Kuwajerwala
    url: https://www.alihkw.com/
  - name: Qiao Gu
    url: https://georgegu1997.github.io/
  - name: Mohd Omama
    url: https://scholar.google.com/citations?user=jFH3ShsAAAAJ&hl=en
  - name: Tao Chen
    url: https://taochenshh.github.io/
  - name: Shuang Li
    url: https://people.csail.mit.edu/lishuang/
  - name: Ganesh Iyer
    url: https://epiception.github.io/
  - name: Soroush Saryazdi
    url: https://saryazdi.github.io/
  - name: Nikhil Keetha
    url: https://nik-v9.github.io/
  - name: Ayush Tewari
    url: https://ayushtewari.com/
  - name: Joshua B. Tenenbaum
    url: http://web.mit.edu/cocosci/josh.html
  - name: Celso Miguel de Melo
    url: https://celsodemelo.net/
  - name: Madhava Krishna
    url: https://robotics.iiit.ac.in/
  - name: Liam Paull
    url: https://liampaull.ca/
  - name: Florian Shkurti
    url: http://www.cs.toronto.edu/~florian/
  - name: Antonio Torralba
    url: https://groups.csail.mit.edu/vision/torralbalab/
venue: RSS
year: 2023
selected: true
featured: true
preview: /assets/img/publication_preview/conceptfusion.gif
previewAlt: A gif depicting the types of multimodal queries (text, image, audio, click) supported by ConceptFusion.
links:
  pdf: https://concept-fusion.github.io/assets/pdf/2023-ConceptFusion.pdf
  website: https://concept-fusion.github.io/
  code: https://github.com/concept-fusion/concept-fusion
  video: https://www.youtube.com/watch?v=rkXgws8fiDs
abstract: "Building 3D maps of the environment is central to robot navigation, planning, and interaction with objects in a scene. Most existing approaches that integrate semantic concepts with 3D maps largely remain confined to the closed-set setting: they can only reason bout a finite set of concepts, pre-defined at training time. Further, these maps can only be queried using class labels, or in recent work, using text prompts. We address both these issues with ConceptFusion, a scene representation that is: (i) fundamentally open-set, enabling reasoning beyond a closed set of concepts (ii) inherently multi-modal, enabling a diverse range of possible queries to the 3D map, from language, to images, to audio, to 3D geometry, all working in concert. ConceptFusion leverages the open-set capabilities of today’s foundation models pre-trained on internet-scale data to reason about concepts across modalities such as natural language, images, and audio. We demonstrate that pixel-aligned open-set features can be fused into 3D maps via traditional SLAM and multi-view fusion approaches. This enables effective zero-shot spatial reasoning, not needing any additional training or finetuning, and retains long-tailed concepts better than supervised approaches, outperforming them by more than 40 percent margin on 3D IoU. We extensively evaluate ConceptFusion on a number of real-world datasets, simulated home environments, a real-world tabletop manipulation task, and an autonomous driving platform. We showcase new avenues for blending foundation models with 3D open-set multimodal mapping."
contrib: I conceived the idea and led the project. I also wrote much of the code and the paper. I curated and annotated the UnCoCo dataset and helped with the tabletop robot experiments.
bibtex: |-
  @inproceedings{conceptfusion,
    title = {ConceptFusion: Open-set Multimodal 3D Mapping},
    author = {Jatavallabhula, {Krishna Murthy} and Kuwajerwala, Alihusein and Gu, Qiao and Omama, Mohd and Chen, Tao and Li, Shuang and Iyer, Ganesh and Saryazdi, Soroush and Keetha, Nikhil and Tewari, Ayush and Tenenbaum, {Joshua B.} and {de Melo}, {Celso Miguel} and Krishna, Madhava and Paull, Liam and Shkurti, Florian and Torralba, Antonio},
    year = {2023},
    booktitle = {RSS},
    dataset and helped with the tabletop robot experiments.},
    featured = {true}
  }
---
