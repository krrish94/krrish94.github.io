---
key: gradsim
order: 20
title: "gradSim: Differentiable simulation for system identification and visuomotor control"
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Miles Macklin
    url: http://blog.mmacklin.com/about/
    equal: true
  - name: Florian Golemo
    url: https://fgolemo.github.io/
  - name: Vikram Voleti
    url: https://voletiv.github.io/
  - name: Linda Petrini
    url: https://lindapetrini.github.io/
  - name: Martin Weiss
    url: http://martincsweiss.com/
  - name: Breandan Considine
    url: http://breandan.net/
  - name: Jerome Parent-Levesque
  - name: Kevin Xie
    url: https://kevincxie.github.io/
  - name: Kenny Erleben
    url: https://iphys.wordpress.com/
  - name: Liam Paull
    url: https://liampaull.ca/
  - name: Florian Shkurti
    url: http://www.cs.toronto.edu/~florian/
  - name: Derek Nowrouzezahrai
    url: https://www.cim.mcgill.ca/~derek/
  - name: Sanja Fidler
    url: https://www.cs.toronto.edu/~fidler/
venue: ICLR
year: 2021
selected: true
featured: true
preview: /assets/img/publication_preview/gradsim.png
previewAlt: A few physical systems implemented in gradSim.
links:
  pdf: https://openreview.net/pdf?id=c_E8kFWfhp0
  website: https://gradsim.github.io
  code: https://github.com/gradsim/gradsim
  video: https://youtu.be/YuVdk1b0TVw
abstract: In this paper, we tackle the problem of estimating object physical properties such as mass, friction, and elasticity directly from video sequences. Such a system identification problem is fundamentally ill-posed due to the loss of information during image formation. Current best solutions to the problem require precise 3D labels which are labor intensive to gather, and infeasible to create for many systems such as deformable solids or cloth. In this work we present gradSim, a framework that overcomes the dependence on 3D supervision by combining differentiable multiphysics simulation and differentiable rendering to jointly model the evolution of scene dynamics and image formation. This unique combination enables backpropagation from pixels in a video sequence through to the underlying physical attributes that generated them. Furthermore, our unified computation graph across dynamics and rendering engines enables the learning of challenging visuomotor control tasks, without relying on state-based (3D) supervision, while obtaining performance competitive to/better than techniques that require precise 3D labels.
tldr: Differentiable models of time-varying dynamics and image formation pipelines result in highly accurate physical parameter estimation from video and visuomotor control.
contrib: This idea was jointly conceived in a meeting which included me, Derek, Breandan, Martin, Bhairav Mehta, and Maxime Chevalier-Boisvert. Martin prototyped an initial differentiable billiards engine. I implemented the first rigid-body engine, integrated it with a differentiable renderer, and setup sys-id experiments. Miles and I then joined forces, with him focusing on the physics engine and me focusing on the physics + rendering combination and overall systems integration. I ran all of the experiments for this paper. Florian (Golemo) and Vikram created the datasets, designed experiments, and also helped with code and the manuscript. All authors participated in writing the manuscript and the author response phase. Florian (Shkurti), Derek, and Sanja nearly equally co-advised on this effort.
bibtex: |-
  @inproceedings{gradsim,
    title = {gradSim: Differentiable simulation for system identification and visuomotor control},
    author = {Jatavallabhula, {Krishna Murthy} and Macklin, Miles and Golemo, Florian and Voleti, Vikram and Petrini, Linda and Weiss, Martin and Considine, Breandan and Parent-Levesque, Jerome and Xie, Kevin and Erleben, Kenny and Paull, Liam and Shkurti, Florian and Nowrouzezahrai, Derek and Fidler, Sanja},
    year = {2021},
    booktitle = {ICLR},
    featured = {true}
  }
---
