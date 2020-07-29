---
title: 'Shooply HTML Template'
description: '✍️Coming soon: Visual testing is a pragmatic yet precise way to check UI appearance.'
heroDescription: '✍️Coming soon: Visual testing is a pragmatic yet precise way to verify the look of UI components. It’s practiced by companies like Slack, Lonely Planet, and Walmart. This five chapter handbook gives you an overview of visual testing in Storybook.'
overview: 'What is visual testing? Visual tests validate the appearance of rendered UI by capturing an image of it in a consistent browser environment. That image is compared to previous images (baselines) to detect visual changes. UIs are more complex, multi-state, and personalized than ever. Visual testing helps you ensure that your app looks and feels right every release.'
order: 3
themeColor: '#A87E53'
codeGithubUrl: 'https://github.com/chromaui/learnstorybook-code'
heroAnimationName: 'float'
toc:
  ['introduction', 'component-explorers', 'visual-test-driven-development', 'tutorial', 'automate']
coverImagePath: '/shooply/cover.jpg'
thumbImagePath: '/shooply/thumb.jpg'
contributorCount: '2'
authors:
  [
    {
      src: 'https://avatars2.githubusercontent.com/u/263385',
      name: 'Dominic Nguyen',
      detail: 'Storybook design',
    },
    {
      src: 'https://avatars2.githubusercontent.com/u/132554',
      name: 'Tom Coleman',
      detail: 'Storybook core',
    },
  ]
contributors: []
---

<div class="btn-download">
  <ul class="listing-download">
    <li><a class="link-download" href="#">Download</a></li>
    <li><a class="link-demo" href="#">Live Preview</a></li>
  </ul>
</div>

<h2>What you'll build</h2>

<div class="badge-box">
  <div class="badge">
    <img src="/frameworks/logo-react.svg"> React
  </div>
</div>

![CommentList](/visual-testing-handbook/commentlist-presentation-data.jpg)

`CommentList` is a list component that you might find in any chat tool. Follow along as we demonstrate how to use Storybook to build discrete UI states including `loading`, `empty`, and `hasData`. Then we'll walk through the process of visual testing by hand and automatically.
