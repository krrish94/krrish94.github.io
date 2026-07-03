---
key: dal
order: 27
title: Deep Active Localization
authors:
  - name: Sai Krishna Gottipati
    url: https://saikrishna-1996.github.io/
    equal: true
  - name: Keehong Seo
    equal: true
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Dhaivat Bhatt
    url: https://dhaivat1729.github.io/
  - name: Vincent Mai
  - name: Liam Paull
    url: https://liampaull.ca/
venue: Robotics and Automation Letters
year: 2019
preview: /assets/img/publication_preview/dal.png
previewAlt: An image of the localization experiments (in simulation and on a real robot).
links:
  pdf: http://arxiv.org/pdf/1903.01669.pdf
  code: https://github.com/montrealrobotics/dal
abstract: Active localization is the problem of generating robot actions that allow it to maximally disambiguate its pose within a reference map. Traditional approaches to this use an information-theoretic criterion for action selection and hand-crafted perceptual models. In this work we propose an end-to-end differentiable method for learning to take informative actions that is trainable entirely in simulation and then transferable to real robot hardware with zero refinement. The system is composed of two modules - a convolutional neural network for perception, and a deep reinforcement learned planning module. We introduce a multi-scale approach to the learned perceptual model since the accuracy needed to perform action selection with reinforcement learning is much less than the accuracy needed for robot control. We demonstrate that the resulting system outperforms using the traditional approach for either perception or planning. We also demonstrate our approaches robustness to different map configurations and other nuisance parameters through the use of domain randomization in training. The code is also compatible with the OpenAI gym framework, as well as the Gazebo simulator.
tldr: We demonstrate the applicability of a learned perception model and an exploration policy applied to active localization on real robots
contrib: Sai and Keehong did most of this work. I was only loosely involved in a mentorship role
bibtex: |-
  @inproceedings{dal,
    title = {Deep Active Localization},
    author = {Gottipati, {Sai Krishna} and Seo, Keehong and Jatavallabhula, {Krishna Murthy} and Bhatt, Dhaivat and Mai, Vincent and Paull, Liam},
    year = {2019},
    booktitle = {Robotics and Automation Letters},
  }
---
