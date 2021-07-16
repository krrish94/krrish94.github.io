---
title: "DRACO: Weakly supervised dense reconstruction and canonicalization of objects"
authors:
- Rahul Sajnani
- AadilMehdi Sanchawala
- admin
- Srinath Sridhar
- madhav
date: "2021-06-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-06-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: We present DRACO, a method for Dense Reconstruction And Canonicalization of Object shape from one or more RGB images. Canonical shape reconstruction; estimating 3D object shape in a coordinate space canonicalized for scale, rotation, and translation parameters—is an emerging paradigm that holds promise for a multitude of robotic applications. Prior approaches either rely on painstakingly gathered dense 3D supervision, or produce only sparse canonical representations, limiting real-world applicability. DRACO performs dense canonicalization using only weak supervision in the form of camera poses and semantic keypoints at train time. During inference, DRACO predicts dense object-centric depth maps in a canonical coordinate-space, solely using one or more RGB images of an object. Extensive experiments on canonical shape reconstruction and pose estimation show that DRACO is competitive or superior to fully-supervised methods.

# Summary. An optional shortened abstract.
summary: We present a weakly supervised approach that reconstructs objects in a canonical coordinate space.

tags:
- Source Themes
featured: false

links:
- name: Project page
  url: https://aadilmehdis.github.io/DRACO-Project-Page/

# url_pdf: http://arxiv.org/pdf/2002.08394.pdf
# url_code: 'https://hbutsuak95.github.io/monolayout'
# url_dataset: '#'
# url_poster: '#'
url_project: 'https://aadilmehdis.github.io/DRACO-Project-Page/'
# url_slides: ''
# url_source: '#'
# url_video: 'https://www.youtube.com/watch?v=HcroGyo6yRQ'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'draco'
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
