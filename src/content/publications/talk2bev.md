---
key: talk2bev
order: 7
title: "Talk2BEV: Language-enhanced Bird’s-eye View Maps for Autonomous Driving"
authors:
  - name: Vikrant Dewangan
    url: https://vikr-182.github.io/
  - name: Tushar Choudhary
    equal: true
  - name: Shivam Chandhok
    url: https://scholar.google.com/citations?user=ZER2BeIAAAAJ&hl=en
    equal: true
  - name: Shubham Priyadarshan
  - name: Anushka Jain
  - name: Arun Singh
    url: https://sites.google.com/view/akslab
  - name: Siddharth Srivastava
    url: https://siddharthsrivastava.github.io/
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Madhava Krishna
    url: https://robotics.iiit.ac.in/
venue: ICRA
year: 2024
preview: /assets/img/publication_preview/talk2bev.gif
previewAlt: A gif depicting a conversation with the Talk2BEV system. The user asks how they should move 20 m forward, and the system responds by saying there is a vehicle in front that we may need to pass by changing to the other lane.
links:
  website: https://llmbev.github.io/talk2bev/
  code: https://github.com/llmbev/talk2bev
  video: https://www.youtube.com/watch?v=TMht-8SGJ0I
abstract: This work introduces Talk2BEV, a large vision-language model (LVLM) interface for bird’s-eye view (BEV) maps commonly used in autonomous driving. While existing perception systems for autonomous driving scenarios have largely focused on a pre-defined (closed) set of object categories and driving scenarios, Talk2BEV eliminates the need for BEV-specific training, relying instead on performant pre-trained LVLMs. This enables a single system to cater to a variety of autonomous driving tasks encompassing visual and spatial reasoning, predicting the intents of traffic actors, and decision-making based on visual cues. We extensively evaluate Talk2BEV n a large number of scene understanding tasks that rely on both the ability to interpret freefrom natural language queries, and in grounding these queries to the visual context embedded into the language-enhanced BEV map. To enable further research in LVLMs for autonomous driving scenarios, we develop and release Talk2BEV-Bench, a benchmark encompassing 1000 human-annotated BEV scenarios, with more than 20,000 questions and ground-truth responses from the NuScenes dataset.
contrib: I conceived the initial idea and played a lead-advisor role on the project.
bibtex: |-
  @inproceedings{talk2bev,
    title = {Talk2BEV: Language-enhanced Bird's-eye View Maps for Autonomous Driving},
    author = {Dewangan, Vikrant and Choudhary, Tushar and Chandhok, Shivam and Priyadarshan, Shubham and Jain, Anushka and Singh, Arun and Srivastava, Siddharth and Jatavallabhula, {Krishna Murthy} and Krishna, Madhava},
    year = {2024},
    booktitle = {ICRA},
  }
---
