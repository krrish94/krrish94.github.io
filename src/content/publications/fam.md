---
key: fam
order: 11
title: "Follow Anything: Open-set detection, tracking, and following in real-time"
authors:
  - name: Alaa Maalouf
  - name: Ninad Jadhav
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Makram Chahine
  - name: Daniel M Vogt
  - name: Robert J Wood
  - name: Antonio Torralba
    url: https://groups.csail.mit.edu/vision/torralbalab/
  - name: Daniela Rus
venue: Robotics and Automation Letters
year: 2024
preview: /assets/img/publication_preview/follow-anything.gif
previewAlt: A gif depicting the Follow Anything system tracking and following an object in real-time.
links: {}
abstract: Tracking and following objects of interest is critical to several robotics use cases, ranging from industrial automation to logistics and warehousing, to healthcare and security. In this paper, we present a robotic system to detect, track, and follow any object in real-time. Our approach, dubbed “follow anything” (FAn), is an open-vocabulary and multimodal model – it is not restricted to concepts seen at training time and can be applied to novel classes at inference time using text, images, or click queries. Leveraging rich visual descriptors from large-scale pre-trained models (foundation models), FAn can detect and segment objects by matching multimodal queries (text, images, clicks) against an input image sequence. These detected and segmented objects are tracked across image frames, all while accounting for occlusion and object re-emergence. We demonstrate FAn on a real-world robotic system (a micro aerial vehicle) and report its ability to seamlessly follow the objects of interest in a real-time control loop. FAn can be deployed on a laptop with a lightweight (6-8 GB) graphics card, achieving a throughput of 6-20 frames per second.
contrib: Alaa and Ninad did most of the work. I was consulted primarily for systems building advice.
bibtex: |-
  @inproceedings{fam,
    title = {Follow Anything: Open-set detection, tracking, and following in real-time},
    author = {Maalouf, Alaa and Jadhav, Ninad and Jatavallabhula, {Krishna Murthy} and Chahine, Makram and Vogt, {Daniel M} and Wood, {Robert J} and Torralba, Antonio and Rus, Daniela},
    year = {2024},
    booktitle = {Robotics and Automation Letters},
  }
---
