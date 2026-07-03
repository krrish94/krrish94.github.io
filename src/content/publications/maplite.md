---
key: maplite
order: 25
title: "MapLite: Autonomous intersection navigation without detailed prior maps"
authors:
  - name: Teddy Ort
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Rohan Banerjee
  - name: Sai Krishna Gottipati
    url: https://saikrishna-1996.github.io/
  - name: Dhaivat Bhatt
    url: https://dhaivat1729.github.io/
  - name: Igor Gilitschenski
  - name: Liam Paull
    url: https://liampaull.ca/
  - name: Daniela Rus
venue: Robotics and Automation Letters
year: 2019
recognition: Best paper award
preview: /assets/img/publication_preview/maplite.png
previewAlt: An image of the autonomous car (Toyota Prius V) used for MapLite.
links:
  pdf: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8936918
  video: https://youtu.be/P6Kk5pB2gF4
abstract: In this work, we present MapLite- a one-click autonomous navigation system capable of piloting a vehicle to an arbitrary desired destination point given only a sparse publicly available topometric map (from OpenStreetMap). The onboard sensors are used to segment the road region and register the topometric map in order to fuse the high-level navigation goals with a variational path planner in the vehicle frame. This enables the system to plan trajectories that correctly navigate road intersections without the use of an external localization system such as GPS or a detailed prior map. Since the topometric maps already exist for the vast majority of roads, this solution greatly increases the geographical scope for autonomous mobility solutions. We implement MapLite on a full-scale autonomous vehicle and exhaustively test it on over 15 km of road including over 100 autonomous intersection traversals. We further extend these results through simulated testing to validate the system on complex road junction topologies such as traffic circles.
tldr: MapLite is a one-click autonomous navigation system for a vehicle that only uses OpenStreetMap data and local sensing
contrib: Teddy did nearly all of this work. I helped design the topometric registration algorithm and write the manuscript.
bibtex: |-
  @inproceedings{maplite,
    title = {MapLite: Autonomous intersection navigation without detailed prior maps},
    author = {Ort, Teddy and Jatavallabhula, {Krishna Murthy} and Banerjee, Rohan and Gottipati, {Sai Krishna} and Bhatt, Dhaivat and Gilitschenski, Igor and Paull, Liam and Rus, Daniela},
    year = {2019},
    booktitle = {Robotics and Automation Letters},
    recognition = {Best paper award}
  }
---
