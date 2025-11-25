**<h1 style="border-bottom: none;">Theoretical Response</h1>**
###### By Yyoung Du
---
### Short Answer Questions

**Question 1** \
<ins>Discuss the role of HTML, CSS, and JavaScript in creating responsive web pages. Explain the significance of asynchronous programming in improving web page load times and user experience. (4)</ins>
\
\
HTML, CSS and JavaScript each play a distinct yet independent role in creating responsive web pages. HTML provides the structural foundation by organizing content onto different parts such as HEAD or BODY that are used alone with CSS and Javascript to create adaptive and responsive web pages. CSS controls the visual presentation and layout, using tools such as queries and flexible grid systems to allow for the web page to respond and adapt across devices of different sizes, resolutions and orientation. JavaScript adds interactivity and responsive behaviors enabling real-time content updates such as dropdowns and sliders that adjusts the content on-screen and responsive adjustments based on user input or the dimensions of the screen. Together, these technologies ensure that web pages are both adaptable and engaging. However, responsiveness alone does not guarantee optimal performance. Through the use of asynchronous programming, it allows for web pages to load and update content without blocking the main web page. This improves load times and enhances user experience by enabling smooth interactions. One great example of this is Gmail. When it launched in 2004, it used asynchronous Javascript rather than synchronous page reloads used by services such as Yahoo Mail and Hotmail. This allowed for emails to be loaded quickly, searches to be performed quickly and the user interactions felt seamless because it was all being preloaded in the background. That's why Gmail is so dominant today. By combining responsive designs using HTML, CSS and JavaScript as well as asynchronous programming, it allows for a web application to be adaptive and efficient, improving the load times and user experience as well as making it responsive to all kinds of devices.
\
\
**Question 2**\
<ins>Explain how a slow page loading can impact user engagement and suggest web programming techniques to improve it. (2)</ins>
\
\
Slow page loading can significantly impact the user's engagement by increasing the bounce rates, make them frustrated and give off unreliable effects. A website that takes more than 10 seconds to load often see a massive dropout in attention as users abandon the page. It increases dissatisfaction and gives off negative perceptions of the brand and website. To improve the load times, developers can use techniques such as asynchronous programming which allows for the pages contents like images or branches of the website to load quietly in the background so that it is already rendered when the user wants to view it. Other aspects such as optimizing asset like compressing images can further improve the loading time and thus increase user engagement.
\
\
**Question 3**\
<ins>Explain two benefits of HTML and CSS in web development. Provide an example of how they work together to structure and style a webpage. (4 marks)</ins>
\
\
HTML and CSS provide important benefits in web development by separating structure from style and ensuring consistent and responsive design across devices. HTML defines the content and layout of a webpage, such as headings, paragraphs, and images, while CSS controls the visual presentation, including colors, fonts, and positioning. This separation makes websites easier to maintain and update, while also allowing developers to apply uniform styling across multiple pages. For example, a webpage might use HTML to create a ```<div class="banner">Welcome</div>``` section, and CSS to style it with a navy background, white text, and centred alignment, showing how the two work together to structure and visually enhance the page
\
\
**Question 4**\
<ins>Outline what is JavaScript and how it enhances the functionality of a webpage. Provide an example where JavaScript is used to validate user input on a web form. (2)</ins>
\
\
JavaScript is a programming language used in web development to add interactivity and responsive behaviour to webpages, enhancing functionality beyond the rigid structure when just using HTML and CSS. It allows developers to respond to user actions, update content without reloading, and validate inputs to improve usability. For example, in a website where a user must enter an email address, JavaScript can check whether the input contains the “@” symbol before submission, displaying an alert if the format is incorrect. This ensures errors are caught early and improves the user experience.
\
\
**Question 5**\
<ins>Discuss the importance of optimising webpage load time for user experience. Provide three techniques to improve the loading speed of a website. (2)</ins>
\
\
Optimising webpage load time is crucial because slow-loading sites frustrate users, increase the click off rates, and reduce engagement, while fast sites create smoother experiences that encourage visitors to stay longer and interact more with the website. Three effective techniques to improve loading speed include compressing images so it takes less time to process and render them, making CSS and JavaScript more efficient to reduce unnecessary code and speed up rendering, and using asynchronous programming to load intractables and other parts of the webpage in the background so it appears to be instantaneous when the user tries to open them. Together, these strategies ensure faster performance and a better user experience for users.
\
\
**Question 6**\
<ins>Explain how the CSS Flexbox layout works. Provide a simple example of how you would use Flexbox to create a row of three equal-width boxes that adapt to the screen size. You may include a diagram and annotation. (4)</ins>
\
\
The CSS Flexbox layout works by turning a container into a flexible box (display: flex), which allows its child elements to align and distribute space evenly. Unlike traditional block or inline layouts, Flexbox can easily adjust the size, spacing, and alignment of items depending on the space available. This makes it good for creating responsive designs where elements adapt smoothly across devices. \
A simple 3 equal width boxes:\
*HTML*
```
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
```
*CSS*
```
.container {
  display: flex;              /flexbox
  justify-content: space-between; /spaces out boxes evenly
}

.box {
  flex: 1;                    /boxes have equal width
  margin: 5px;                /smol gap between the boxes
  background-color: lightblue;
  text-align: center;
  padding: 20px;
}
```

\
\
**Question 7**\
<ins> Why is web accessibility important, and what are two best practices developers should follow to ensure their websites are accessible to all users? Provide examples for each best practice. (2) </ins>
\
\
Web accessibility is important because it ensures that everyone, including those with disabilities, can access and use the web page. It promotes inclusivity and equal opportunity. Developers can promote inclusivity by semantic HTML, which helps assistive technologies such as screen readers to read the content correctly. For example, using a ```<button>``` instead of a ```<div>``` that is clickable ensures it is read out correctly by the assistive technologies. Another way is providing text alternatives for non-text content. This can be through ways like adding alternate attributes to images so people with visual disabilities can use assistive technologies to read what is on screen. ```<img src="logo.png" alt="Company logo">```  makes it so that the user understands what is on screen even if the image cannot be seen. Together, they make websites more usable for everyone.
\
\
**Question 8**\
<ins>Discuss the importance of cross browser compatibility (3) </ins>
\
\
Cross-browser compatibility is important because it ensures that websites function consistently across different browsers, allowing all users to access content and features without disruption. If a site works well in Chrome but fails in Safari or Firefox, users may experience broken layouts or inaccessible functions, which can frustrate them and reduce engagement. On the positive side, compatibility broadens audience reach and builds trust, as users can rely on the site regardless of their chosen browser. On the negative side, failing to optimise for multiple browsers can damage credibility and exclude potential users. Therefore, by testing and optimising across platforms, developers can maintain usability, reliability, and inclusivity, which strengthens overall user experience and supports the success of the website.
\
\
**Question 9**\
<ins>Explain the use of &lt;canvas&gt; tag in HTML design? Give an example. (2)</ins>
\
\
The ```<canvas>``` tag in HTML is an element that provides a space on a webpage where developers can create graphics using JavaScript. It acts like an empty, programmable drawing surface. Unlike images or standard HTML elements, ```<canvas>``` does not display anything by default. Instead, through the use of JavaScript, it is used to render shapes, animations, charts, games, or interactive visual content. This makes ```<canvas>``` useful when a webpage needs real-time graphics or custom visual output that cannot be achieved using HTML or CSS alone.
```
<canvas id="exampleCanvas" width="67" height="67"></canvas>
<script>
  const canvas = document.getElementById("exampleCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 100, 100);   //blue square
</script>
```
\
\
**Question 10**\
<ins>Justify why the world wide web wasn’t ‘designed’ to be ‘secure’ when it first emerged in the 1980s. (5)</ins>
\
\
The World Wide Web was not designed to be secure in the 1980s because its original purpose was to spread information in a trusted environment.Security threats were not a major concern. In the 1980s, the internet was used mainly by universities, government researchers, and scientific institutions. These groups operated in a cooperative, low-risk environment, so security features like encryption, authentication, and access control were not considered necessary. The priority was connectivity, simplicity and openness not protection. Furthermore, computing power and networking technology were limited at the time. Implementing strong security mechanisms would have made those computers slower and more expensive. Early web protocols such as HTTP were intentionally lightweight so information could be accessed quickly over slow networks. Finally, hacking, and large-scale attacks were not yet very common. Because the early internet community was small and trusted, developers did not anticipate the global expansion of the web or the security threats that would later arise. For example, HTTP originally transmitted all data, including passwords, in plain text because it was assumed that only trusted researchers would use the system. Only when the web expanded to the public in the 1990s did technologies like HTTPS and encryption become necessary.