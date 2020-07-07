---
title: "MapLite: Autonomous intersection navigation without detailed prior maps"
authors:
- teddy
- admin
- Rohan Banerjee
- sai
- dhaivat
- igor
- liam
- Daniela Rus
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
publication: In *Robotics and Automation Letters*
publication_short: In *RAL*

abstract: In this work, we present MapLite- a one-click autonomous navigation system capable of piloting a vehicle to an arbitrary desired destination point given only a sparse publicly available topometric map (from OpenStreetMap). The onboard sensors are used to segment the road region and register the topometric map in order to fuse the high-level navigation goals with a variational path planner in the vehicle frame. This enables the system to plan trajectories that correctly navigate road intersections without the use of an external localization system such as GPS or a detailed prior map. Since the topometric maps already exist for the vast majority of roads, this solution greatly increases the geographical scope for autonomous mobility solutions. We implement MapLite on a full-scale autonomous vehicle and exhaustively test it on over 15 km of road including over 100 autonomous intersection traversals. We further extend these results through simulated testing to validate the system on complex road junction topologies such as traffic circles.


# Summary. An optional shortened abstract.
summary: MapLite is a one-click autonomous navigation system for a vehicle that only uses OpenStreetMap data and local sensing (<span style="color:red"><b>**Best paper award, RAL 2019**</b></span>).

tags:
- Source Themes
featured: true

url_pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8936918'
# url_code: 'https://hbutsuak95.github.io/monolayout'
# url_dataset: '#'
# url_poster: '#'
# url_project: 'http://montrealrobotics.ca/gradSLAM/'
# url_slides: ''
# url_source: '#'
url_video: 'https://youtu.be/P6Kk5pB2gF4'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'A Toyota Prius used in real-world runs of the MapLite system'
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
