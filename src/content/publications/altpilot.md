---
key: altpilot
order: 6
title: "ALT-Pilot: Autonomous navigation with Language augmented Topometric maps"
authors:
  - name: Mohd Omama
    url: https://scholar.google.com/citations?user=jFH3ShsAAAAJ&hl=en
  - name: Pranav Inani
    url: https://scholar.google.com/citations?user=1K8EuVEAAAAJ&hl=en
  - name: Pranjal Paul
  - name: Sarat Chandra Yellapragada
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Sandeep Chinchali
    url: https://utaustin-swarmlab.github.io/people/sandeep_chinchali/index.html
    equal: true
  - name: Madhava Krishna
    url: https://robotics.iiit.ac.in/
venue: preprint
year: 2023
featured: true
preview: /assets/img/publication_preview/altpilot.gif
previewAlt: Our system, ALT-Pilot, autonomously driving to a language-specified destination.
links:
  pdf: https://arxiv.org/pdf/2310.02324.pdf
  website: https://navigate-anywhere.github.io/ALT-Pilot/
  video: https://youtu.be/sw7MuZs1q-0
abstract: We present an autonomous navigation system that operates without assuming HD LiDAR maps of the environment. Our system, ALT-Pilot, relies only on publicly available road network information and a sparse (and noisy) set of crowdsourced language landmarks. With the help of onboard sensors and a language-augmented topometric map, ALT-Pilot autonomously pilots the vehicle to any destination on the road network. We achieve this by leveraging vision- language models pre-trained on web-scale data to identify potential landmarks in a scene, incorporating vision-language features into the recursive Bayesian state estimation stack to generate global (route) plans, and a reactive trajectory planner and controller operating in the vehicle frame. We implement and evaluate ALT-Pilot in simulation and on a real, full-scale autonomous vehicle and report improvements over state-of- the-art topometric navigation systems by a factor of 3x on localization accuracy and 5x on goal reachability.
contrib: Idea jointly conceived by Omama and me. I established project directions/goals; closely mentored Omama, Pranjal, and Pranav. Omama did bulk of the implementation, with significant contributions also from Pranjal and Pranav.
bibtex: |2-
    title = {ALT-Pilot: Autonomous navigation with Language augmented Topometric maps},
    author = {Omama, Mohd and Inani, Pranav and Paul, Pranjal and Yellapragada, {Sarat Chandra} and Jatavallabhula, {Krishna Murthy} and Chinchali, Sandeep and Krishna, Madhava},
    year = {2023},
    booktitle = {preprint},
    featured = {true},
  }
---
