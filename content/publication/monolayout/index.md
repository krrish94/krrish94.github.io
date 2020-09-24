---
title: "MonoLayout: Amodal scene layout from a single image"
authors:
- Kaustubh Mani
- Swapnil Daga
- Shubhika Garg
- Sai Shankar
- admin
- madhav
date: "2020-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-04-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Winter conference on Applications of Computer Vision*
publication_short: In *WACV*

abstract: In this paper, we address the novel, highly challenging problem of estimating the layout of a complex urban driving scenario. Given a single color image captured from a driving platform, we aim to predict the bird’s-eye view layout of the road and other traffic participants. The estimated layout should reason beyond what is visible in the image, and compensate for the loss of 3D information due to projection. We dub this problem "amodal scene layout estimation", which involves hallucinating scene layout for even parts of the world that are occluded in the image. To this end, we present MonoLayout, a deep neural network for real-time amodal scene layout estimation from a single image. MonoLayout maps a color image of a scene into a multi-channel occupancy grid in bird’s-eye view, where each channel represents occupancy probabilities of various scene components. We represent scene layout as a multi-channel semantic occupancy grid, and leverage adversarial feature learning to hallucinate plausible completions for occluded image parts. We extend several state-of-the-art approaches for road-layout estimation and vehicle occupancy estimation in bird’s-eye view to the amodal setup and thoroughly evaluate against them. By leveraging temporal sensor fusion to generate training labels, we significantly outperform current art over a number of datasets.


# Summary. An optional shortened abstract.
summary: We present a neural network that "hallucinates" the layout of a road scene from a single image, including scene parts that are outside the bounds of the image.

tags:
- Source Themes
featured: false

links:
- name: Project page
  url: https://hbutsuak95.github.io/monolayout/

url_pdf: http://arxiv.org/pdf/2002.08394.pdf
url_code: 'https://hbutsuak95.github.io/monolayout'
# url_dataset: '#'
# url_poster: '#'
# url_project: 'http://montrealrobotics.ca/gradSLAM/'
# url_slides: ''
# url_source: '#'
url_video: 'https://www.youtube.com/watch?v=HcroGyo6yRQ'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'monolayout'
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
