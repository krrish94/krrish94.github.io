---
key: infer
order: 28
title: "INFER: INtermediate representations for FuturE pRediction"
authors:
  - name: Shashank Srikanth
  - name: Junaid Ahmed Ansari
    url: https://junaidcs032.github.io/
  - name: Karnik Ram
    url: https://karnikram.info/
  - name: Sarthak Sharma
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: IROS
year: 2019
preview: /assets/img/publication_preview/iros2019infer.png
previewAlt: Trajectories forecast in bird’s-eye view by INFER.
links:
  pdf: http://arxiv.org/pdf/1903.10641.pdf
  website: https://talsperre.github.io/INFER/
  code: https://github.com/talsperre/INFER
  video: https://www.youtube.com/watch?v=sHxXIX-FZoU
abstract: Deep learning methods have ushered in a new era for computer vision and robotics. With very accurate methods for object detection and semantic segmentation, we are now at a juncture where we can envisage the application of these techniques to perform higher-order understanding. One such application which we consider in this work, is predicting future states of traffic participants in urban driving scenarios. Specifically, we argue that constructing intermediate representations of the world using off-the-shelf computer vision models for semantic segmentation and object detection, we can train models that account for the multi-modality of future states, and at the same time transfer well across different train and test distributions (datasets). Our approach, dubbed INFER (INtermediate representations for distant FuturE pRediction), involves training an autoregressive model that takes in an intermediate representation of past states of the world, and predicts a multimodal distribution over plausible future states. The model consists of an Encoder-Decoder with ConvLSTM present along the skip connections, and in between the Encoder-Decoder. The network takes an intermediate representation of the scene and predicts the future locations of the Vehicle of Interest (VoI). We outperform the current best future prediction model on KITTI while predicting deep into the future (3 sec, 4 sec) by a significant margin. Contrary to most approaches dealing with future prediction that do not generalize well to datasets that they have not been trained on, we test our method on different datasets like Oxford RobotCar and Cityscapes, and show that the network performs well across these datasets which differ in scene layout, weather conditions, and also generalizes well across cross-sensor modalities. We carry out a thorough ablation study on our intermediate representation that captures the role played by different semantics. We conclude the results section by showcasing an important use case of future prediction- multi object tracking and exhibit results on select sequences from KITTI and Cityscapes.
tldr: INFER demonstrates the applicability of intermediate representations for zero-shot transferrable trajectory forecasting of vehicles in urban driving scenarios
contrib: Shashank led this work. I came up with the idea, mentored the work, and wrote bulk of the manuscript.
bibtex: |-
  @inproceedings{infer,
    title = {INFER: INtermediate representations for FuturE pRediction},
    author = {Srikanth, Shashank and Ansari, {Junaid Ahmed} and Ram, Karnik and Sharma, Sarthak and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2019},
    booktitle = {IROS},
  }
---
