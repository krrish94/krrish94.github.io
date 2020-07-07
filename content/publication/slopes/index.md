---
title: "The Earth ain’t Flat: Monocular Reconstruction of Vehicles on Steep and Graded Roads from a Moving Camera"
authors:
- junaid
- sarthak
- Anshuman Majumdar
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

abstract: Accurate localization of other traffic participants is a vital task in autonomous driving systems. State-of-the-art systems employ a combination of sensing modalities such as RGB cameras and LiDARs for localizing traffic participants, but most such demonstrations have been confined to plain roads. We demonstrate, to the best of our knowledge, the first results for monocular object localization and shape estimation on surfaces that do not share the same plane with the moving monocular camera. We approximate road surfaces by local planar patches and use semantic cues from vehicles in the scene to initialize a local bundle-adjustment like procedure that simultaneously estimates the pose and shape of the vehicles, and the orientation of the local ground plane on which the vehicle stands as well. We evaluate the proposed approach on the KITTI and SYNTHIA-SF benchmarks, for a variety of road plane configurations. The proposed approach significantly improves the state-of-the-art for monocular object localization on arbitrarily-shaped roads.


# Summary. An optional shortened abstract.
summary: We demonstrate monocular object localization and wireframe (shape) estimation on extremely steep and graded roads.

tags:
- Source Themes
featured: false

url_pdf: 'http://arxiv.org/pdf/1803.02057.pdf'
# url_code: 'https://github.com/talsperre/INFER'
# url_dataset: '#'
# url_poster: '#'
# url_project: 'https://talsperre.github.io/INFER/'
# url_slides: ''
# url_source: '#'
url_video: 'https://www.youtube.com/watch?v=KQZFa5_IvpU'

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
