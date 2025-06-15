---
layout: page
permalink: /publications/
title: publications
# description: For a list of my featured publications, visit my home page
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
nav_order: 0
---


For a list of my *featured* publications, please scroll down the <a href="/">home</a> page.
<!-- This publication page lists all of my major publications.  -->
For an exhaustive list that includes workshop papers, please see my CV.

<sup>* indicates that authors contributed equally</sup>

<!-- _pages/publications.md -->
<div class="publications">

<div class="title"><p style="background-color: lightyellow; color: red">Indicates featured/representative publications</p></div>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  <br><br>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
