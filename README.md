# Introduction

### 2023 42Seoul Community Problem-Solving Hackathon
- This project started with the question, "How can we activate 42Seoul goods system?"
- We focused on the 'merchandise inventory management'. so, we presented a web service with the concept of a crowdfunding site as the solution.
### the 42Seoul management team proposed the development of the project as a full-fledged service
- Building upon what we developed during the hackathon, we expanded the project with more features and collaborated with new members for further advancement.
- we also aimed to create a voting site that can be utilized in various ways within the 42Seoul community.
### Currently in operation
- As of July 24th, it is being operated for the 42Seoul community.
- ‘A sticker contest for cadet welcome Gift’ was held on the 42Vote platform.
### The provided features are as follows:
- Cadets can submit their own designs for desired goods and receive feedback from other cadets through voting.
- In addition to goods designs, contest and simple polls can be conducted in newly created categories.
- Statistical data for the posted content in each category can be viewed in Excel file format.



# Stacks
## Environment
<img src="https://img.shields.io/badge/Visual_studio_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" /> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />

## Development
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" /> <img src="https://img.shields.io/badge/JSON_Web_Token-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />

<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" /> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" /> <img src="https://img.shields.io/badge/Mui-007FFF?style=for-the-badge&logo=mui&logoColor=white" />

## Config & Communication
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" /> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" />

# Page Layout
<div align="center">
  
|![로그인화면](https://github.com/42vote/42Vote_Front/assets/48785968/7ddebc13-1b95-44b5-98f2-d060632ab9d3)|
|:--:|
|Login Page|

|![메인페이지](https://github.com/42vote/42Vote_Front/assets/48785968/71790f3c-4222-400f-90a1-c3051a9dc91f)|
|:--:|
|Main Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/ead7f10c-c2ab-471d-ac0e-cb63588b98a6" alt="mainpage-mobile" width="470"/>|
|:--:|
|Main Page (mobile)|

|![마이 페이지](https://github.com/42vote/42Vote_Front/assets/48785968/166b37fb-a551-4c81-9ab7-e57276bb1fab)|
|:--:|
|My Page|

|![마이 페이지-모바일](https://github.com/42vote/42Vote_Front/assets/48785968/de61bef9-59c9-46e8-90f4-2152f48c7c6e)|
|:--:|
|My Page (mobile)|

|![문서 페이지](https://github.com/42vote/42Vote_Front/assets/48785968/151f2a3b-d3f3-489c-bb4a-68a9dd4ce06f)|
|:--:|
|Detail Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/3aa43068-a04e-41af-b26e-be2d4fa6a2fa" alt="detailpage-mobile" width="470"/>|
|:--:|
|Detail Page (mobile)|

|![문서 생성](https://github.com/42vote/42Vote_Front/assets/48785968/c5515103-060e-431a-af43-9fcc50bd808e)|
|:--:|
|Posting Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/ea21f222-401a-4df1-9174-225e56b4c6cd" alt="postingpage-mobile" width="470"/>|
|:--:|
|Posting Page (mobile)|

|![카데고리 관리](https://github.com/42vote/42Vote_Front/assets/48785968/e55998f8-4d95-467f-ae01-f066f1593288)|
|:--:|
|Category Manage Page|

|![우선순위 변경](https://github.com/42vote/42Vote_Front/assets/48785968/3f05ff22-ee63-4926-8692-36aaab326441)|
|:--:|
|Category Reorder Page|

|![통계 페이지](https://github.com/42vote/42Vote_Front/assets/48785968/e5916364-0f79-4e55-a71d-5a9d1358bf72)|
|:--:|
|Statistics Page|

</div>

# Directory
```
frontend
├── public
│   ├── Fonts
│   └── img
└── src
    ├── Admin
    │   ├── apis
    │   ├── components
    │   │   ├── AdminCategorys
    │   │   │   └── ReorderCategory
    │   │   └── Statistics
    │   ├── contexts
    │   ├── logics
    │   └── styles
    ├── Auth
    │   ├── apis
    │   ├── components
    │   └── util
    ├── CommonComponents
    │   ├── CardsComponents
    │   ├── CategoryComponents
    │   └── StyledComponents
    ├── CommonContext
    ├── Detail
    │   ├── component
    │   ├── interface
    │   ├── page
    │   ├── service
    │   └── style
    ├── Etc
    ├── Lib
    ├── Login
    ├── Main
    │   ├── apis
    │   ├── customHooks
    │   └── styles
    ├── Mypage
    │   ├── apis
    │   ├── components
    │   ├── customHooks
    │   ├── effects
    │   └── styles
    ├── Posting
    │   ├── component
    │   ├── page
    │   ├── service
    │   └── style
    └── Types
```
