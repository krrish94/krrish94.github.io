---
title: "INFER: INtermediate representations for FuturE pRediction"
authors:
- Shashank Srikanth
- Junaid Ahmed Ansari
- Karnik Ram
- Sarthak Sharma
- admin
- Madhava Krishna
date: "2019-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2019-04-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Intelligent Robots and Systems*
publication_short: In *IROS*

abstract: Deep learning methods have ushered in a new era for computer vision and robotics. With very accurate methods for object detection and semantic segmentation, we are now at a juncture where we can envisage the application of these techniques to perform higher-order understanding. One such application which we consider in this work, is predicting future states of traffic participants in urban driving scenarios. Specifically, we argue that constructing intermediate representations of the world using off-the-shelf computer vision models for semantic segmentation and object detection, we can train models that account for the multi-modality of future states, and at the same time transfer well across different train and test distributions (datasets). Our approach, dubbed INFER (INtermediate representations for distant FuturE pRediction), involves training an autoregressive model that takes in an intermediate representation of past states of the world, and predicts a multimodal distribution over plausible future states. The model consists of an Encoder-Decoder with ConvLSTM present along the skip connections, and in between the Encoder-Decoder. The network takes an intermediate representation of the scene and predicts the future locations of the Vehicle of Interest (VoI). We outperform the current best future prediction model on KITTI while predicting deep into the future (3 sec, 4 sec) by a significant margin. Contrary to most approaches dealing with future prediction that do not generalize well to datasets that they have not been trained on, we test our method on different datasets like Oxford RobotCar and Cityscapes, and show that the network performs well across these datasets which differ in scene layout, weather conditions, and also generalizes well across cross-sensor modalities. We carry out a thorough ablation study on our intermediate representation that captures the role played by different semantics. We conclude the results section by showcasing an important use case of future prediction- multi object tracking and exhibit results on select sequences from KITTI and Cityscapes.


# Summary. An optional shortened abstract.
summary: INFER demonstrates the applicability of intermediate representations for zero-shot transferrable trajectory forecasting of vehicles in urban driving scenarios.

tags:
- Source Themes
featured: false

url_pdf: 'http://arxiv.org/pdf/1903.10641.pdf'
url_code: 'https://github.com/talsperre/INFER'
# url_dataset: '#'
# url_poster: '#'
url_project: 'https://talsperre.github.io/INFER/'
# url_slides: ''
# url_source: '#'
url_video: 'https://www.youtube.com/watch?v=sHxXIX-FZoU&feature=youtu.be'

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
