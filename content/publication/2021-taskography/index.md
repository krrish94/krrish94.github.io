---
title: "Taskography: Evaluating robot task planning over large 3D scene graphs"
authors:
- Chris Agia
- Krishna Murthy Jatavallabhula (Equal-first)
- Mohamed Khodeir
- Ondrej Miksik
- Vibhav Vineet
- Mustafa Mukadam
- liam
- florianshkurti
date: "2021-09-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-09-15T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Conference on Robot Learning*
publication_short: In *CoRL*

abstract: 3D scene graphs (3DSGs) are an emerging description; unifying symbolic, topological, and metric scene representations. However, typical 3DSGs contain hundreds of objects and symbols even for small environments; rendering task planning on the \emph{full} graph impractical. We construct \textbf{Taskography}, the first large-scale robotic task planning benchmark over 3DSGs. While most benchmarking efforts in this area focus on \emph{vision-based planning}, we systematically study \emph{symbolic} planning, to decouple planning performance from visual representation learning. We observe that, among existing methods, neither classical nor learning-based planners are capable of real-time planning over \emph{full} 3DSGs. Enabling real-time planning demands progress on \emph{both} (a) sparsifying 3DSGs for tractable planning and (b) designing planners that better exploit 3DSG hierarchies. Towards the former goal, we propose \textbf{Scrub}, a task-conditioned 3DSG sparsification method; enabling classical planners to match (and surpass) state-of-the-art learning-based planners. Towards the latter goal, we propose \textbf{Seek}, a procedure enabling learning-based planners to exploit 3DSG structure, reducing the number of replanning queries required by current best approaches by an order of magnitude. We will open-source all code and baselines to spur further research along the intersections of robot task planning, learning and 3DSGs.

# Summary. An optional shortened abstract.
summary: We present a large-scale benchmark and performant approaches for long-horizon task planning over large 3D scene graphs

tags:
- Source Themes
featured: true

links:
# - name: Project page
#   url: http://montrealrobotics.ca/gradSLAM/
url_pdf: https://openreview.net/pdf?id=nWLt35BU1z_
url_code: '#'
# url_dataset: '#'
# url_poster: '#'
url_project: 'https://sites.google.com/view/taskography-anonymized'
# url_slides: ''
# url_source: '#'
url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Taskography - benchmarking robot task planning over large 3D scene graphs'
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

