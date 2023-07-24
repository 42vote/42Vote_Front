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
  
|![로그인화면](https://github.com/42vote/42Vote/assets/48785968/9f4059cc-6897-48f1-b0a4-103f3a57afff)|
|:--:|
|Login Page|

|![메인페이지](https://github.com/42vote/42Vote/assets/48785968/130a620e-f336-457c-9677-51c6e6ba22b7)|
|:--:|
|Main Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/ead7f10c-c2ab-471d-ac0e-cb63588b98a6" alt="mainpage-mobile" width="470"/>|
|:--:|
|Main Page (mobile)|

|![마이 페이지](https://github.com/42vote/42Vote/assets/48785968/9db5b21d-0f4e-4fb1-b37d-3c2438d75716)|
|:--:|
|My Page|

|![마이 페이지-모바일](https://github.com/42vote/42Vote/assets/48785968/f14ed308-56f9-4fa7-9ffe-c589503f4aec)|
|:--:|
|My Page (mobile)|

|![상세 페이지](https://github.com/42vote/42Vote/assets/84768491/74665d1e-dbd1-43d6-b521-45c3adc33278)|
|:--:|
|Detail Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/3aa43068-a04e-41af-b26e-be2d4fa6a2fa" alt="detailpage-mobile" width="470"/>|
|:--:|
|Detail Page (mobile)|

|![문서 생성](https://github.com/42vote/42Vote/assets/48785968/bd5e4595-b244-4564-a7ec-1c39a6276d96)|
|:--:|
|Posting Page|

|<img src="https://github.com/42vote/42Vote/assets/84768491/ea21f222-401a-4df1-9174-225e56b4c6cd" alt="postingpage-mobile" width="470"/>|
|:--:|
|Posting Page (mobile)|

|![카데고리 관리](https://github.com/42vote/42Vote/assets/48785968/0fbd64a2-52e7-43d8-88c6-9eaae09595e9)|
|:--:|
|Category Manage Page|

|![우선순위 변경](https://github.com/42vote/42Vote/assets/84768491/c76414ee-9a69-4b78-ab4e-0e991bd6e959)|
|:--:|
|Category Reorder Page|

|![통계 페이지](https://github.com/42vote/42Vote/assets/48785968/c7686880-3336-4819-99f3-0c71aa844ca2)|
|:--:|
|Statistics Page|

</div>

# Directory
```
frontend
├── package-lock.json
├── package.json
├── public
│   ├── 42Seoul.ico
│   ├── Fonts
│   │   ├── KBIZ-Han B.ttf
│   │   ├── KBIZ-Han L.ttf
│   │   ├── KBIZ-Han M.ttf
│   │   ├── KBIZ-Han R.ttf
│   │   ├── Lora-Bold.ttf
│   │   ├── Lora-BoldItalic.ttf
│   │   ├── Lora-Italic.ttf
│   │   ├── Lora-Medium.ttf
│   │   ├── Lora-MediumItalic.ttf
│   │   ├── Lora-Regular.ttf
│   │   ├── Lora-SemiBold.ttf
│   │   ├── Lora-SemiBoldItalic.ttf
│   │   ├── RobotoMono-Bold.ttf
│   │   └── RobotoMono-Medium.ttf
│   ├── img
│   │   ├── admin-button.svg
│   │   ├── delete-button.svg
│   │   ├── file-add-button.svg
│   │   ├── left-button.svg
│   │   ├── loading-spinner.gif
│   │   ├── logout-button.svg
│   │   ├── my-profile-button.svg
│   │   ├── new-post-button.svg
│   │   ├── nextButton.svg
│   │   ├── prevButton.svg
│   │   └── right-button.svg
│   └── index.html
├── src
│   ├── Admin
│   │   ├── apis
│   │   │   └── adminApis.ts
│   │   ├── components
│   │   │   ├── AdminCategorys
│   │   │   │   ├── AdminCategoryList.tsx
│   │   │   │   └── ReorderCategory
│   │   │   │       ├── CategoryColumn.tsx
│   │   │   │       ├── ReorderCategory.tsx
│   │   │   │       ├── Task.tsx
│   │   │   │       └── initialData.ts
│   │   │   ├── CategoryDetail.tsx
│   │   │   ├── ComponentSwitch.tsx
│   │   │   ├── SelectedCategoryInfo.tsx
│   │   │   ├── Statistics
│   │   │   │   ├── CategoryStatistics.tsx
│   │   │   │   ├── SelectStatisticsOption.tsx
│   │   │   │   ├── StatisticsCards.tsx
│   │   │   │   └── StatisticsExport.tsx
│   │   │   └── WhiteListDialog.tsx
│   │   ├── contexts
│   │   │   └── setDocuments.ts
│   │   ├── index.tsx
│   │   ├── logics
│   │   │   └── Logics.tsx
│   │   ├── pages.tsx
│   │   ├── styles
│   │   │   ├── CategoryDetail.css
│   │   │   ├── CategoryInfoBox.css
│   │   │   ├── WhiteListDialog.css
│   │   │   └── styledComponents.ts
│   │   └── types.tsx
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── Auth
│   │   ├── apis
│   │   │   └── authApi.ts
│   │   ├── components
│   │   │   ├── AuthProvider.tsx
│   │   │   └── LoadingModal.tsx
│   │   ├── page.tsx
│   │   ├── types.ts
│   │   └── util
│   │       ├── genToken.ts
│   │       └── tokenExist.ts
│   ├── CommonComponents
│   │   ├── CardsComponents
│   │   │   ├── Card.tsx
│   │   │   ├── CardsContainer.tsx
│   │   │   ├── LineCardsContainers.tsx
│   │   │   ├── NoCards.tsx
│   │   │   ├── SkeletonCards.tsx
│   │   │   ├── rectangleCardsContainer.tsx
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   ├── CategoryComponents
│   │   │   ├── Category.tsx
│   │   │   ├── CategoryContainer.tsx
│   │   │   ├── Categorys.tsx
│   │   │   └── DropDownCategorys.tsx
│   │   └── StyledComponents
│   │       └── AbsolutedDiv.ts
│   ├── CommonContext
│   │   ├── selectedComponentContext.ts
│   │   └── toggleOnContext.ts
│   ├── Detail
│   │   ├── component
│   │   │   ├── Detail.tsx
│   │   │   ├── DetailLoading.tsx
│   │   │   └── StatDialog.tsx
│   │   ├── interface
│   │   │   └── DetailInterface.tsx
│   │   ├── page
│   │   │   ├── DocDelete.tsx
│   │   │   ├── SlideImage.tsx
│   │   │   ├── TimeLine.tsx
│   │   │   └── Voting.tsx
│   │   ├── service
│   │   │   ├── GetData.tsx
│   │   │   └── Update.tsx
│   │   └── style
│   │       ├── Detail.css
│   │       ├── DetailLoading.css
│   │       └── StatDialog.css
│   ├── Etc
│   │   ├── FixedTop.css
│   │   ├── FixedTop.tsx
│   │   ├── NotFound.css
│   │   └── NotFound.tsx
│   ├── Lib
│   │   ├── customAxios.ts
│   │   ├── getColors.ts
│   │   └── setRootFontSize.ts
│   ├── Login
│   │   ├── login.css
│   │   └── login.tsx
│   ├── Main
│   │   ├── apis
│   │   │   └── mainAPI.ts
│   │   ├── customHooks
│   │   │   ├── useCards.ts
│   │   │   ├── useDocSize.ts
│   │   │   ├── useResponsive.ts
│   │   │   ├── useScroll.ts
│   │   │   └── useTags.ts
│   │   ├── index.tsx
│   │   ├── page.tsx
│   │   ├── styles
│   │   │   ├── style.css
│   │   │   └── styleComponents.ts
│   │   └── types.ts
│   ├── Mypage
│   │   ├── apis
│   │   │   └── authAPI.ts
│   │   ├── components
│   │   │   └── UserInfoContainer.tsx
│   │   ├── customHooks
│   │   │   └── useUser.ts
│   │   ├── effects
│   │   │   ├── Scrambler.tsx
│   │   │   └── textScreamble.tsx
│   │   ├── index.tsx
│   │   ├── page.tsx
│   │   ├── styles
│   │   │   └── styledComponents.ts
│   │   └── types.ts
│   ├── Posting
│   │   ├── component
│   │   │   └── Posting.tsx
│   │   ├── page
│   │   │   ├── HandleFile.tsx
│   │   │   ├── RadioClick.tsx
│   │   │   ├── SetDefaultGoal.tsx
│   │   │   ├── ShowEditPage.tsx
│   │   │   └── SubmitDoc.tsx
│   │   ├── service
│   │   │   ├── GetCategory.tsx
│   │   │   ├── PatchDoc.tsx
│   │   │   └── PostDoc.tsx
│   │   └── style
│   │       └── Posting.css
│   ├── Types
│   │   └── common.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── setupTests.ts
├── tsconfig.json
└── webpackDevServer.config.js
```
