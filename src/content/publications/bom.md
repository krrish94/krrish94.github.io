---
key: bom
order: 15
title: Bayesian Object Models for Robotic Interaction with Differentiable Probabilistic Programming
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Miles Macklin
    url: http://blog.mmacklin.com/about/
  - name: Dieter Fox
    url: https://homes.cs.washington.edu/~fox/
  - name: Animesh Garg
  - name: Fabio Ramos
    url: https://fabioramos.github.io/Home.html
venue: CoRL
year: 2022
featured: true
preview: /assets/img/publication_preview/bom.png
previewAlt: A pipeline figure for the Bayesian Object Models work
links:
  pdf: https://openreview.net/pdf?id=QSUsBMuw0uV
abstract: "A hallmark of human intelligence is the ability to build rich mental models of previously unseen objects from very few interactions. To achieve true, continuous autonomy, robots too must possess this ability. Importantly, to integrate with the probabilistic robotics software stack, such models must encapsulate the uncertainty (resulting from noisy dynamics and observation models) in a prescriptive manner. We present Bayesian Object Models (BOMs): generative (probabilistic) models that encode both the structural and kinodynamic attributes of an object. BOMs are implemented in the form of a differentiable probabilistic program that models latent scene structure, object dynamics, and observation models. This allows for efficient and automated Bayesian inference – samples (object trajectories) drawn from the BOM are compared with a small set of real-world observations and used to compute a likelihood function. Our model comprises a differentiable tree structure sampler and a differentiable physics engine, enabling gradient computation through this likelihood function. This enables gradient-based Bayesian inference to efficiently update the distributional parameters of our model. BOMs outperform several recent approaches, including differentiable physics-based, gradient-free, and neural inference schemes."
tldr: We build a differentiable probabilistic physics engine that can estimate posterior distributions over object articulation chains and physical properties
contrib: I led this work during my (virtual) internship at NVIDIA in summer 2021
bibtex: |-
  @inproceedings{bom,
    title = {Bayesian Object Models for Robotic Interaction with Differentiable Probabilistic Programming},
    author = {Jatavallabhula, {Krishna Murthy} and Macklin, Miles and Fox, Dieter and Garg, Animesh and Ramos, Fabio},
    year = {2022},
    booktitle = {CoRL},
    featured = {true}
  }
---
