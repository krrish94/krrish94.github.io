---
title: "Beyond Pixels: Leveraging Geometry and Shape Cues for Multi-Object Tracking"
authors:
- Sarthak Sharma
- Junaid Ahmed Ansari
- admin
- Madhava Krishna
date: "2018-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2018-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: This paper introduces geometry and object shape and pose costs for multi-object tracking in urban driving scenarios. Using images from a monocular camera alone, we devise pairwise costs for object tracks, based on several 3D cues such as object pose, shape, and motion. The proposed costs are agnostic to the data association method and can be incorporated into any optimization framework to output the pairwise data associations. These costs are easy to implement, can be computed in real-time, and complement each other to account for possible errors in a tracking-by-detection framework. We perform an extensive analysis of the designed costs and empirically demonstrate consistent improvement over the state-of-the-art under varying conditions that employ a range of object detectors, exhibit a variety in camera and object motions, and, more importantly, are not reliant on the choice of the association framework. We also show that, by using the simplest of associations frameworks (two-frame Hungarian assignment), we surpass the state-of-the-art in multi-object-tracking on road scenes.


# Summary. An optional shortened abstract.
summary: We present a monocular multi-object tracker that uses simple 3D cues and obtained (in 2018) state-of-the-art results.

tags:
- Source Themes
featured: false

url_pdf: 'http://arxiv.org/pdf/1802.09298.pdf'
url_code: 'https://github.com/JunaidCS032/MOTBeyondPixels'
# url_dataset: '#'
# url_poster: '#'
url_project: 'https://junaidcs032.github.io/Geometry_ObjectShape_MOT/'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/SfoK8u2_s-o'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'BeyondPixels: A simple and effective multi-object tracker'
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
