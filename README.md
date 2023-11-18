
Hosted on Github Pages -> https://jitenderkumar2001.github.io/ttt/


App.js -> Created a new component Profile.js

Profile.js -> This component consist of our main profile page
In this component, A header is been defined consist of the Top Nav bar i.e ttt logo, Stories and courses, A div consisting the background image is defined and at last main-profile is been displayed using ProfileData.json.
For fixing the profile image little above the div "transform: translateY(-30%);" is been used or we could have also used positive: absolute then defining top and left.
For fixing inverted border(164 Posts) a demo div has been defined in posts section and then applied the css "position: absolute:" and "top-84px" to shift the demo div in upper section.
refrence used -> https://www.youtube.com/watch?v=JXaTx4s0kEk&t=200s

PostsSection.js ->This component consist of dummy posts

#Libraries used

*React-icons -> React-icons is a popular library in the React ecosystem that provides a set of customizable, high-quality SVG icons for use in React applications. It offers a convenient way to use icons from various icon libraries without the need for additional CSS or image files.
I have used it for the icons that were used in this project

#Data Files

1) ProfileData.json -> dummy data has been written that is Randered in profile.js
2) data.json -> dummy posts have been written that is randered in PostsSection.Js

As of now the basic implementation has been done(for only Small screen sizes i.e mobiles), I will try to improve some minor parts and will update on the github accordingly.


THANK YOU