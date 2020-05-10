---
title: "Shape Priors for Real-Time Monocular Object Localization in Dynamic Environments"
authors:
- admin
- sarthak
- madhav
date: "2017-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-04-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Intelligent Robots and Systems*
publication_short: In *IROS*

abstract: Reconstruction of dynamic objects in a scene is a highly challenging problem in the context of SLAM. In this paper, we present a real-time monocular object localization system that estimates the shape and pose of dynamic objects in real-time, using video frames captured from a moving monocular camera. Although the problem seems to be ill-posed, we demonstrate that, by incorporating prior knowledge of the object category, we can obtain more detailed instance-level reconstructions. As opposed to earlier object model specifications, the proposed shape-prior model leads to the formulation of a Bundle Adjustment-like optimization problem for simultaneous shape and pose estimation. Leveraging recent successes of Convolutional Neural Networks (CNNs) for object keypoint localization, we present a CNN architecture that performs precise keypoint localization. We then demonstrate how these keypoints can be used to recover 3D object properties, while accounting for any 2D localization errors and self-occlusion. We show significant performance improvements compared to state-of-the-art monocular competitors for 2D keypoint detection, as well as 3D localization and reconstruction of dynamic objects.


# Summary. An optional shortened abstract.
summary: CalibNet is a geometrically-supervised deep neural network for the extrinsic calibration of lidar-stereo camera rigs.

tags:
- Source Themes
featured: false

url_pdf: 'files/iros2017.pdf'
# url_code: 'https://github.com/epiception/CalibNet'
# url_dataset: '#'
url_poster: 'files/iros2017_poster.pdf'
# url_project: 'https://epiception.github.io/CalibNet/'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/rSMjHZV4axg'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'INFER: A visual abstract'
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
