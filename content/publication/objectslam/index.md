---
title: "Constructing Category-Specific Models for Monocular Object SLAM"
authors:
- Parv Parkhiya
- Rishabh Khawad
- admin
- madhav
- Brojeshwar Bhowmick
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

abstract: We present a new paradigm for real-time object-oriented SLAM with a monocular camera. Contrary to previous approaches, that rely on object-level models, we construct category-level models from CAD collections which are now widely available. To alleviate the need for huge amounts of labeled data, we develop a rendering pipeline that enables synthesis of large datasets from a limited amount of manually labeled data. Using data thus synthesized, we learn category-level models for object deformations in 3D, as well as discriminative object features in 2D. These category models are instance-independent and aid in the design of object landmark observations that can be incorporated into a generic monocular SLAM framework. Where typical object-SLAM approaches usually solve only for object and camera poses, we also estimate object shape on-the-fly, allowing for a wide range of objects from the category to be present in the scene. Moreover, since our 2D object features are learned discriminatively, the proposed object-SLAM system succeeds in several scenarios where sparse feature-based monocular SLAM fails due to insufficient features or parallax. Also, the proposed category-models help in object instance retrieval, useful for Augmented Reality (AR) applications. We evaluate the proposed framework on multiple challenging real-world scenes and show — to the best of our knowledge — first results of an instance-independent monocular object-SLAM system and the benefits it enjoys over feature-based SLAM methods.


# Summary. An optional shortened abstract.
summary: We present a monocular object SLAM system that uses category-level object representations as object observations.

tags:
- Source Themes
featured: false

url_pdf: 'http://arxiv.org/pdf/1802.09292.pdf'
# url_code: 'https://github.com/epiception/CalibNet'
# url_dataset: '#'
# url_poster: '#'
# url_project: 'https://epiception.github.io/CalibNet/'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/_LpHrn1opSk'

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
