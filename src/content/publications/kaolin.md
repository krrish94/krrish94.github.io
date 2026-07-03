---
key: kaolin
order: 26
title: "Kaolin: A PyTorch Library for Accelerating 3D Deep Learning Research"
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true
    equal: true
  - name: Edward Smith
    url: https://edwardsmith1884.github.io/
    equal: true
  - name: Jean-Francois Lafleche
  - name: Clement Fuji Tsang
  - name: Artem Rozantsev
  - name: Wenzheng Chen
  - name: Tommy Xiang
  - name: Rev Lebaredian
  - name: Sanja Fidler
    url: https://www.cs.toronto.edu/~fidler/
venue: Whitepaper
year: 2019
featured: true
preview: /assets/img/publication_preview/kaolin.png
previewAlt: A splash figure showing various features supported by the Kaolin library.
links:
  pdf: http://arxiv.org/pdf/1911.05063.pdf
  code: https://github.com/NVIDIAGameWorks/kaolin
abstract: Kaolin is a PyTorch library aiming to accelerate 3D deep learning research. Kaolin provides efficient implementations of differentiable 3D modules for use in deep learning systems. With functionality to load and preprocess several popular 3D datasets, and native functions to manipulate meshes, pointclouds, signed distance functions, and voxel grids, Kaolin mitigates the need to write wasteful boilerplate code. Kaolin packages together several differentiable graphics modules including rendering, lighting, shading, and view warping. Kaolin also supports an array of loss functions and evaluation metrics for seamless evaluation and provides visualization functionality to render the 3D results. Importantly, we curate a comprehensive model zoo comprising many state-of-the-art 3D deep learning architectures, to serve as a starting point for future research endeavours.
tldr: Kaolin is a PyTorch library aimed at accelerating 3D deep learning research.
contrib: Edward and I led this work during our 2019 internships at NVIDIA. It has since been maintained and developed by several others, notably, Clement, Masha Shugrina, and Towaki Takikawa
bibtex: |-
  @inproceedings{kaolin,
    title = {Kaolin: A PyTorch Library for Accelerating 3D Deep Learning Research},
    author = {Jatavallabhula, {Krishna Murthy} and Smith, Edward and Lafleche, Jean-Francois and {Fuji Tsang}, Clement and Rozantsev, Artem and Chen, Wenzheng and Xiang, Tommy and Lebaredian, Rev and Fidler, Sanja},
    year = {2019},
    booktitle = {Whitepaper},
    featured = {true}
  }
---
