---
title: "gradSim: Differentiable simulation for system identification and visuomotor control"
authors:
- admin
- Miles Macklin (Equal-first)
- floriangolemo
- Vikram Voleti
- Linda Petrini
- Martin Weiss
- Breandan Considine
- Jerome Parent-Levesque
- Kevin Xie
- Kenny Erleben
- liam
- florianshkurti
- derek
- sanja
date: "2021-01-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-01-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Learning Representations*
publication_short: In *ICLR*

abstract: In this paper, we tackle the problem of estimating object physical properties such as mass, friction, and elasticity directly from video sequences. Such a system identification problem is fundamentally ill-posed due to the loss of information during image formation. Current best solutions to the problem require precise 3D labels which are labor intensive to gather, and infeasible to create for many systems such as deformable solids or cloth. In this work we present gradSim, a framework that overcomes the dependence on 3D supervision by combining differentiable multiphysics simulation and differentiable rendering to jointly model the evolution of scene dynamics and image formation. This unique combination enables backpropagation from pixels in a video sequence through to the underlying physical attributes that generated them. Furthermore, our unified computation graph across dynamics and rendering engines enables the learning of challenging visuomotor control tasks, without relying on state-based (3D) supervision, while obtaining performance competitive to/better than techniques that require precise 3D labels.

# Summary. An optional shortened abstract.
summary: Differentiable models of time-varying dynamics and image formation pipelines result in highly accurate physical parameter estimation from video

tags:
- Source Themes
featured: true

links:
# - name: Project page
#   url: http://montrealrobotics.ca/gradSLAM/
url_pdf: https://openreview.net/pdf?id=c_E8kFWfhp0
url_code: 'https://github.com/gradsim/gradsim'
# url_dataset: '#'
# url_poster: '#'
url_project: 'https://gradsim.github.io'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/YuVdk1b0TVw'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'gradSim: A differentiable simulator (physics and rendering engine)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% alert note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /alert %}}

{{% alert note %}}
Click the *Slides* button above to demo Academic's Markdown slides feature.
{{% /alert %}}

Supplementary notes can be added here, including [code and math](https://sourcethemes.com/academic/docs/writing-markdown-latex/).

