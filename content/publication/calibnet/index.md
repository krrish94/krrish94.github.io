---
title: "CalibNet: Self-Supervised Extrinsic Calibration using 3D Spatial Transformer Networks
"
authors:
- ganesh
- Karnik Ram
- admin
- madhav
date: "2018-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2018-04-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Intelligent Robots and Systems*
publication_short: In *IROS*

abstract: 3D LiDARs and 2D cameras are increasingly being used alongside each other in sensor rigs for perception tasks. Before these sensors can be used to gather meaningful data, however, their extrinsics (and intrinsics) need to be accurately calibrated, as the performance of the sensor rig is extremely sensitive to these calibration parameters. A vast majority of existing calibration techniques require significant amounts of data and/or calibration targets and human effort, severely impacting their applicability in large-scale production systems. We address this gap with CalibNet - a self-supervised deep network capable of automatically estimating the 6-DoF rigid body transformation between a 3D LiDAR and a 2D camera in real-time. CalibNet alleviates the need for calibration targets, thereby resulting in significant savings in calibration efforts. During training, the network only takes as input a LiDAR point cloud, the corresponding monocular image, and the camera calibration matrix K. At train time, we do not impose direct supervision (i.e., we do not directly regress to the calibration parameters, for example). Instead, we train the network to predict calibration parameters that maximize the geometric and photometric consistency of the input images and point clouds. CalibNet learns to iteratively solve the underlying geometric problem and accurately predicts extrinsic calibration parameters for a wide range of mis-calibrations, without requiring retraining or domain adaptation.


# Summary. An optional shortened abstract.
summary: CalibNet is a geometrically-supervised deep neural network for the extrinsic calibration of lidar-stereo camera rigs.

tags:
- Source Themes
featured: false

links:
- name: Project page
  url: https://epiception.github.io/CalibNet/
url_pdf: 'http://arxiv.org/pdf/1803.08181.pdf'
url_code: 'https://github.com/epiception/CalibNet'
# url_dataset: '#'
# url_poster: '#'
url_project: '#'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/WyW9T2dSbec'

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
