---
key: taskography
order: 18
title: "Taskography: Evaluating robot task planning over large 3D scene graphs"
authors:
  - name: Chris Agia
    url: https://www.chrisagia.com/
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Mohamed Khodeir
  - name: Ondrej Miksik
  - name: Vibhav Vineet
    url: http://vibhavvineet.info/
  - name: Mustafa Mukadam
    url: https://www.mustafamukadam.com/
  - name: Liam Paull
    url: https://liampaull.ca/
  - name: Florian Shkurti
    url: http://www.cs.toronto.edu/~florian/
venue: CoRL
year: 2021
featured: true
preview: /assets/img/publication_preview/taskography.png
previewAlt: A sample 3D scene graph of a small house containing multiple rooms.
links:
  pdf: https://openreview.net/pdf?id=nWLt35BU1z_
  website: https://taskography.github.io/
  code: https://github.com/taskography
  video: https://youtu.be/mM4v5hP4LdA
abstract: 3D scene graphs (3DSGs) are an emerging description; unifying symbolic, topological, and metric scene representations. However, typical 3DSGs contain hundreds of objects and symbols even for small environments; rendering task planning on the \emphfull graph impractical. We construct \textbfTaskography, the first large-scale robotic task planning benchmark over 3DSGs. While most benchmarking efforts in this area focus on \emphvision-based planning, we systematically study \emphsymbolic planning, to decouple planning performance from visual representation learning. We observe that, among existing methods, neither classical nor learning-based planners are capable of real-time planning over \emphfull 3DSGs. Enabling real-time planning demands progress on \emphboth (a) sparsifying 3DSGs for tractable planning and (b) designing planners that better exploit 3DSG hierarchies. Towards the former goal, we propose \textbfScrub, a task-conditioned 3DSG sparsification method; enabling classical planners to match (and surpass) state-of-the-art learning-based planners. Towards the latter goal, we propose \textbfSeek, a procedure enabling learning-based planners to exploit 3DSG structure, reducing the number of replanning queries required by current best approaches by an order of magnitude. We will open-source all code and baselines to spur further research along the intersections of robot task planning, learning and 3DSGs.
tldr: We present a large-scale benchmark and performant approaches for long-horizon task planning over large 3D scene graphs
contrib: Idea was conceived, led, and implemented by Chris and I. Chris focused more on the benchmark. I focused on the SCRUB and SEEK algorithms. Mohamed helped implement several optimal planners. Chris implemented the Taskography-API.
bibtex: |-
  @inproceedings{taskography,
    title = {Taskography: Evaluating robot task planning over large 3D scene graphs},
    author = {Agia, Chris and Jatavallabhula, {Krishna Murthy} and Khodeir, Mohamed and Miksik, Ondrej and Vineet, Vibhav and Mukadam, Mustafa and Paull, Liam and Shkurti, Florian},
    year = {2021},
    booktitle = {CoRL},
    featured = {true}
  }
---
