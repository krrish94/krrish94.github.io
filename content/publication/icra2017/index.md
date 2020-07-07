---
title: "Reconstructing Vehicles From a Single Image: Shape Priors for Road Scene Understanding"
authors:
- admin
- sai
- Falak Chhaya
- madhav
date: "2017-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: We present an approach for reconstructing vehicles from a single (RGB) image, in the context of autonomous driving. Though the problem appears to be ill-posed, we demonstrate that prior knowledge about how 3D shapes of vehicles project to an image can be used to reason about the reverse process, i.e., how shapes (back-)project from 2D to 3D. We encode this knowledge in shape priors, which are learnt over a small keypoint-annotated dataset. We then formulate a shape-aware adjustment problem that uses the learnt shape priors to recover the 3D pose and shape of a query object from an image. For shape representation and inference, we leverage recent successes of Convolutional Neural Networks (CNNs) for the task of object and keypoint localization, and train a novel cascaded fully-convolutional architecture to localize vehicle keypoints in images. The shape-aware adjustment then robustly recovers shape (3D locations of the detected keypoints) while simultaneously filling in occluded keypoints. To tackle estimation errors incurred due to erroneously detected keypoints, we use an Iteratively Re-weighted Least Squares (IRLS) scheme for robust optimization, and as a by-product characterize noise models for each predicted keypoint. We evaluate our approach on autonomous driving benchmarks, and present superior results to existing monocular, as well as stereo approaches.


# Summary. An optional shortened abstract.
summary: We leverage category-level shape priors to reconstruct vehicles from a single image.

tags:
- Source Themes
featured: false

url_pdf: 'files/icra2017.pdf'
url_code: 'https://github.com/krrish94/ICRA2017'
# url_dataset: '#'
url_poster: 'files/icra2017_poster.pdf'
# url_project: 'https://junaidcs032.github.io/Geometry_ObjectShape_MOT/'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/rSMjHZV4axg'

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
