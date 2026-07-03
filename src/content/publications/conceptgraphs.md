---
key: conceptgraphs
order: 3
title: "ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning"
authors:
  - name: Qiao Gu
    url: https://georgegu1997.github.io/
    equal: true
  - name: Alihusein Kuwajerwala
    url: https://www.alihkw.com/
    equal: true
  - name: Sacha Morin
    url: https://sachamorin.github.io/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Bipasha Sen
    url: https://bipashasen.github.io/
  - name: Aditya Agarwal
    url: https://skymanaditya1.github.io/
  - name: Corban Rivera
    url: https://www.jhuapl.edu/work/our-organization/research-and-exploratory-development/red-staff-directory/corban-rivera
  - name: William Paul
    url: https://scholar.google.com/citations?user=92bmh84AAAAJ
  - name: Kirsty Ellis
    url: https://mila.quebec/en/person/kirsty-ellis/
  - name: Rama Chellappa
    url: https://engineering.jhu.edu/faculty/rama-chellappa/
  - name: Chuang Gan
    url: https://people.csail.mit.edu/ganchuang/
  - name: Celso Miguel de Melo
    url: https://celsodemelo.net/
  - name: Joshua B. Tenenbaum
    url: http://web.mit.edu/cocosci/josh.html
  - name: Antonio Torralba
    url: https://groups.csail.mit.edu/vision/torralbalab/
  - name: Florian Shkurti
    url: http://www.cs.toronto.edu/~florian/
  - name: Liam Paull
    url: https://liampaull.ca/
venue: ICRA
year: 2024
selected: true
featured: true
preview: /assets/img/publication_preview/conceptgraphs.gif
previewAlt: A gif depicting the 3D mapping process implemented as part of ConceptGraphs.
links:
  pdf: https://concept-graphs.github.io/assets/pdf/2023-ConceptGraphs.pdf
  website: https://concept-graphs.github.io/
  code: https://github.com/concept-graphs/concept-graphs
  video: https://youtu.be/mRhNkQwRYnc
abstract: For robots to perform a wide variety of tasks, they require a 3D representation of the world that is semantically rich, yet compact and efficient for task-driven perception and planning. Recent approaches have attempted to leverage features from large vision-language models to encode semantics in 3D representations. However, these approaches tend to produce maps with per-point feature vectors, which do not scale well in larger environments, nor do they contain semantic spatial relationships between entities in the environment, which are useful for downstream planning. In this work, we propose ConceptGraphs, an open-vocabulary graph-structured representation for 3D scenes. ConceptGraphs is built by leveraging 2D foundation models and fusing their output to 3D by multi-view association. The resulting representations generalize to novel semantic classes, without the need to collect large 3D datasets or finetune models. We demonstrate the utility of this representation through a number of downstream planning tasks that are specified through abstract (language) prompts and require complex reasoning over spatial and semantic concepts.
contrib: I co-led multiple aspects of this work, building off of our prior work with ConceptFusion.
bibtex: |-
  @inproceedings{conceptgraphs,
    title = {ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning},
    author = {Gu, Qiao and Kuwajerwala, Alihusein and Morin, Sacha and Jatavallabhula, {Krishna Murthy} and Sen, Bipasha and Agarwal, Aditya and Rivera, Corban and Paul, William and Ellis, Kirsty and Chellappa, Rama and Gan, Chuang and {de Melo}, {Celso Miguel} and Tenenbaum, {Joshua B.} and Torralba, Antonio and Shkurti, Florian and Paull, Liam},
    year = {2024},
    booktitle = {ICRA},
    featured = {true}
  }
---
