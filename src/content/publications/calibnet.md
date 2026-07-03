---
key: calibnet
order: 30
title: "CalibNet: Self-Supervised Extrinsic Calibration using 3D Spatial Transformer Networks"
authors:
  - name: Ganesh Iyer
    url: https://epiception.github.io/
  - name: Karnik Ram
    url: https://karnikram.info/
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Madhava Krishna K
    url: https://robotics.iiit.ac.in/
venue: IROS
year: 2018
preview: /assets/img/publication_preview/calibnet.png
previewAlt: CalibNet architecture (block diagram) for geometrically-supervised lidar-camera extrinsic calibration.
links:
  pdf: http://arxiv.org/pdf/1803.08181.pdf
  website: https://github.com/epiception/CalibNet
  video: https://youtu.be/WyW9T2dSbec
abstract: 3D LiDARs and 2D cameras are increasingly being used alongside each other in sensor rigs for perception tasks. Before these sensors can be used to gather meaningful data, however, their extrinsics (and intrinsics) need to be accurately calibrated, as the performance of the sensor rig is extremely sensitive to these calibration parameters. A vast majority of existing calibration techniques require significant amounts of data and/or calibration targets and human effort, severely impacting their applicability in large-scale production systems. We address this gap with CalibNet - a self-supervised deep network capable of automatically estimating the 6-DoF rigid body transformation between a 3D LiDAR and a 2D camera in real-time. CalibNet alleviates the need for calibration targets, thereby resulting in significant savings in calibration efforts. During training, the network only takes as input a LiDAR point cloud, the corresponding monocular image, and the camera calibration matrix K. At train time, we do not impose direct supervision (i.e., we do not directly regress to the calibration parameters, for example). Instead, we train the network to predict calibration parameters that maximize the geometric and photometric consistency of the input images and point clouds. CalibNet learns to iteratively solve the underlying geometric problem and accurately predicts extrinsic calibration parameters for a wide range of mis-calibrations, without requiring retraining or domain adaptation.
tldr: CalibNet is a geometrically-supervised deep neural network for the extrinsic calibration of lidar-stereo camera rigs
contrib: Ganesh led this work. I had the initial idea, and Ganesh had clever tweaks that got it to work in practice.
bibtex: |-
  @inproceedings{calibnet,
    title = {CalibNet: Self-Supervised Extrinsic Calibration using 3D Spatial Transformer Networks},
    author = {Iyer, Ganesh and Ram, Karnik and Jatavallabhula, {Krishna Murthy} and K, {Madhava Krishna}},
    year = {2018},
    booktitle = {IROS},
  }
---
