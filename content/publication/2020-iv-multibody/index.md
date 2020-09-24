---
title: "Multi-object monocular SLAM for dynamic environments"
authors:
- Gokul Nair
- Swapnil Daga
- Rahul Sajnani
- Anirudha Ramesh
- junaid
- admin
- madhav
date: "2020-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Intelligent Vehicles Symposium*
publication_short: In *IV*

abstract: — In this paper, we tackle the problem of multibody SLAM from a monocular camera. The term multibody, implies that we track the motion of the camera, as well as that of other dynamic participants in the scene. The quintessential challenge in dynamic scenes is unobservability; it is not possible to unambiguously triangulate a moving object from a moving monocular camera. Existing approaches solve restricted variants of the problem, but the solutions suffer relative scale ambiguity (i.e., a family of infinitely many solutions exist for each pair of motions in the scene). We solve this rather intractable problem by leveraging single-view metrology, advances in deep learning, and category-level shape estimation. We propose a multi posegraph optimization formulation, to resolve the relative and absolute scale factor ambiguities involved. This optimization helps us reduce the average error in trajectories of multiple bodies over real-world datasets, such as KITTI. To the best of our knowledge, our method is the first practical monocular multi-body SLAM system to perform dynamic multi-object and ego localization in a unified framework in metric scale.


# Summary. An optional shortened abstract.
summary: We present a monocular object SLAM system that tracks not just the camera, but also other moving objects in the scene.

tags:
- Source Themes
featured: false

url_pdf: 'https://arxiv.org/pdf/2002.03528.pdf'
# url_code: 'https://github.com/epiception/CalibNet'
# url_dataset: '#'
# url_poster: '#'
# url_project: 'https://epiception.github.io/CalibNet/'
# url_slides: ''
# url_source: '#'
url_video: 'https://www.bilibili.com/video/av90800325/'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Monocular multibody SLAM'
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
