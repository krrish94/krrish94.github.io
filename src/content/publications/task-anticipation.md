---
key: task-anticipation
order: 8
title: "Anticipate & Act: Integrating LLMs and Classical Planning for Efficient Task Execution in Household Environments"
authors:
  - name: Raghav Arora
  - name: Shivam Singh
  - name: Karthik Swaminathan
  - name: Ahana Datta
  - name: Snehasis Banerjee
  - name: Brojeshwar Bhowmick
    url: https://sites.google.com/view/brojeshwar/home
  - name: Krishna Murthy Jatavallabhula
    self: true
  - name: Mohan Sridharan
  - name: Madhava Krishna
    url: https://robotics.iiit.ac.in/
venue: ICRA
year: 2024
preview: /assets/img/publication_preview/task-anticipation.gif
previewAlt: A gif depicting the task anticipation and execution process on a simulated household agent in the VirtualHome environment.
links:
  website: https://raraghavarora.github.io/ahsoka/
abstract: Assistive agents performing household tasks such as making the bed, preparing coffee, or cooking breakfast, often consider one task at a time by computing a plan of actions that accomplishes this task. The agents can be more efficient by anticipating upcoming tasks, and computing and executing an action sequence that jointly achieves these tasks. State of the art methods for task anticipating use data-driven deep network architectures and Large Language Models (LLMs) for task estimation but they do so at the level of high-level tasks and/or require a large number of training examples. Our framework leverages the generic knowledge of LLMs through a small number of prompts to perform high-level task anticipation, using the anticipated tasks as joint goals in a classical planning system to compute a sequence of finer-granularity actions that jointly achieve these goals. We ground and evaluate our framework’s capabilities in realistic simulated scenarios in the VirtualHome environment and demonstrate a 31 percent reduction in the execution time in comparison with a system that does not consider upcoming tasks.
contrib: I closely mentored the students on this project, including conceptualizing the broad theme and advising on experiment design. Raghav and Shivam did nearly all of the work. Mohan wrote a bulk of the manuscript.
bibtex: |-
  @inproceedings{task-anticipation,
    title = {Anticipate & Act: Integrating LLMs and Classical Planning for Efficient Task Execution in Household Environments},
    author = {Arora, Raghav and Singh, Shivam and Swaminathan, Karthik and Datta, Ahana and Banerjee, Snehasis and Bhowmick, Brojeshwar and Jatavallabhula, {Krishna Murthy} and Sridharan, Mohan and Krishna, Madhava},
    year = {2024},
    booktitle = {ICRA},
  }
---
