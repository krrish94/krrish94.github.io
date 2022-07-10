---
layout: page
permalink: /publications/
title: publications
# description: For a list of my featured publications, visit my home page
years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
nav_order: 0
---


For a list of my *featured* publications, please see [here](#)

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  <br>
  <!-- <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0"> -->
    {% bibliography -f papers -q @*[year={{y}}]* %}
  <!-- </table> -->
{% endfor %}

</div>
