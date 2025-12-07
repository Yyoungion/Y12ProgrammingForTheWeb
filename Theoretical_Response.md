**<h1 style="border-bottom: none;">Theoretical Response</h1>**
###### By Yyoung Du

**Question 1**
---
### Discuss the role of HTML, CSS, and JavaScript in creating responsive web pages. Explain the significance of asynchronous programming in improving web page load times and user experience. (4)
\
HTML structures the content of a webpage, CSS controls its presentation, and JavaScript manages its behaviour. Together, these three technologies establish the foundation for responsive web development. Asynchronous programming supports responsiveness by preventing the browser from pausing or freezing during long operations, which results in smoother interactions.

HTML establishes the organisation of headings, paragraphs, inputs, and navigation elements. CSS then adapts these elements through responsive techniques, such as media queries and flexible layouts, ensuring consistent usability on screens of varying sizes. JavaScript provides dynamic behaviour by updating the interface without requiring the entire page to reload, which strengthens interactivity. Each layer fulfils a distinct responsibility within the responsive design process.

Asynchronous programming enhances the user experience by enabling the browser to handle tasks in the background. When operations such as API requests, file processing, or data retrieval occur asynchronously, the interface remains interactive instead of being blocked. This increases efficiency because essential page elements load first, while less urgent resources load progressively.

For example, a registration page may load the layout and form before loading optional scripts. JavaScript’s ```fetch()``` method retrieves user information from a server without interrupting the user’s ability to interact with the form.
CSS media queries adjust the layout so the form shifts from a multi-column design on desktop displays to a single-column layout on mobile screens.

A helpful way to view this relationship is to imagine a building: HTML is the structural framework, CSS is the interior design, and JavaScript is the electrical system that enables functional features. Asynchronous programming functions as a separate generator providing power without causing outages.

**Question 2**
---
### Explain how a slow page loading can impact user engagement and suggest web programming techniques to improve it. (2)
\
Slow page loading reduces user engagement because users expect immediate access to information. When delays occur, users often disengage from the site before the content becomes accessible. Web programming techniques enhance performance by reducing load time and prioritising essential resources.

Studies show that even a short delay increases bounce rates because users value efficiency. A slow page disrupts navigation and reduces trust in the reliability of the website. User experience depends on responsiveness; therefore, performance directly influences how long users remain on the site.

Several techniques address loading delays. Image compression reduces file size and shortens download time. External CSS and JavaScript optimisation removes unnecessary characters from code, improving transfer speed. 

For example, a webpage that loads a large image only when the user scrolls to it responds faster during initial navigation. Optimised CSS and JavaScript files decrease total load requirements, further improving responsiveness.

This mirrors a supermarket queue where customers are processed quickly when fewer items are scanned first. The faster initial tasks are completed, the higher the satisfaction and the more willing customers become to continue engaging.

**Question 3**
---
### Explain two benefits of HTML and CSS in web development. Provide an example of how they work together to structure and style a webpage. (4 marks)

HTML offers a structure to a website, while CSS improves presentation and consistency across a website. Together, they produce organised and visually pleasing webpages.

HTML provides meaning to content by distinguishing between headings, paragraphs, lists, forms, and navigation areas. This structure assists devices, browsers, and search engines in interpreting the purpose of each element. CSS separates design concerns from structure, enabling developers to apply colour, spacing, padding and layout rules without altering the HTML content. This separation promotes maintainability and reduces duplication.

When HTML and CSS interact, they create interfaces that communicate information clearly. Developers adjust colours, fonts, and spacing in CSS while keeping HTML purely structural. This reduces complexity and supports scalable design practices, especially in larger projects.

For example, a developer may create an HTML ```<section>``` element containing text and buttons. CSS then applies a Flexbox layout to align these elements horizontally with equal spacing. The HTML remains unchanged even if the developer later modifies the theme colours or layout alignment in CSS.

This relationship is similar to constructing a frame for a painting (HTML) and then choosing the style, colours, and textures that express artistic vision (CSS). The two components complement one another to produce an artistic and visually pleasing final outcome.

**Question 4**
---
### Outline what is JavaScript and how it enhances the functionality of a webpage. Provide an example where JavaScript is used to validate user input on a web form. (2)

JavaScript is a client-side language that introduces functionality into webpages. It enhances interaction by responding to actions made by the user, updating content instantly, and also making sure validation rules are followed.

JavaScript improves usability by detecting user interactions such as clicks, inputs, and form submissions. It processes the information in the browser, which removes the need for page reloads every time something happens. Through Document Object Model (DOM) manipulation, JavaScript updates content, displays messages, and prevents invalid data from being submitted.

For example, when a user types an email into a registration form, JavaScript evaluates the input using a regular expression. If the input does not match the valid patten, JavaScript displays an error message and prevents the form from submitting until the user corrects the input.

This behaviour resembles a receptionist who checks a form before filing it, ensuring the information meets required standards before progressing to the next stage.

**Question 5**
---
### Discuss the importance of optimising webpage load time for user experience. Provide three techniques to improve the loading speed of a website. (2)

Optimising webpage load time is essential because faster pages improve user satisfaction and attention. Efficient loading contributes to usability and influences how effectively users access content.

Load time affects navigation flow, user trust, and perceived quality of the web page. Slow sites often appear to be unreliable, reducing the likelihood that users continue browsing. Fast sites provide smoother interactions and support responsiveness across devices.

Three key optimisation techniques strengthen performance are to first compress images. This reduces the file size while maintaining clarity. Second, caching stores frequently used files which lowers server requests. Third, reducing the JavaScript execution by optimizing scripts to prevents delays during page rendering.

An example of of this would be when a website introduces caching which allows returning users to load content almost instantly because repeated elements such as logos and stylesheets are retrieved from memory rather than the server.

This process resembles placing essential items in a backpack instead of collecting them from different rooms repeatedly, resulting in quicker access.

**Question 6**
---
### Explain how the CSS Flexbox layout works. Provide a simple example of how you would use Flexbox to create a row of three equal-width boxes that adapt to the screen size. You may include a diagram and annotation. (4)

Flexbox is a CSS layout module that arranges elements along a flexible axis, allowing them to adjust to available space. It distributes items evenly and supports responsive behaviour.

Flexbox establishes a parent container that controls how child elements grow, shrink, and align. Developers specify directions such as row or column, and Flexbox automatically redistributes space according to screen size. This system simplifies responsive layouts and reduces the need for manual width calculations.

A row of three equal boxes is achieved by setting the container to ```display: flex``` and assigning each child ```flex: 1```. This ensures each box occupies one-third of the available width, regardless of screen size.

![Flexbox Example](Images\Flexbox.png "An example of the usage of flexbox to achieve responsive web design.")

```
.container {
  display: flex;
}

.box {
  flex: 1;
  padding: 20px;
  border: 1px black;
}
```
In this style.css, a container that was created in the HTML is given the ```display: flex```, which turns the container into a flex container which changes how its children behave. By having ```.box``` be a child of the container, it makes the box line up instead of stacking vertically. Using the ```flex: 1```, the boxes take up the same amount of space, allowing for it to fit different screen widths and lengths.

**Question 7**
---
### Why is web accessibility important, and what are two best practices developers should follow to ensure their websites are accessible to all users? Provide examples for each best practice. (2)

Web accessibility ensures digital content is available to all users, including those with disabilities. It promotes equity and complies with the legal and ethical standards.

Accessible designs removes barriers that prevent users with visual, auditory, cognitive, or physical limitations from navigating and using a web page. Accessibility also improves the experience for all users by ensuring clarity, keyboard accessibility, as well as predictable behaviour.

Two essential best practices support accessibility. Firstly, descriptive alternative text is able to communicate the meaning of images to users who rely on screen readers. Second, sufficient colour contrast such as black against white ensures text remains readable for users with vision impairments. These practices align with the Web Content Accessibility Guidelines (WCAG).

For example, an image of a registration success message should include alt text describing the purpose of the image. A button uses a high-contrast colour combination such as dark text on a light background so that users is able to understand and read the purpose of the button.

This is just like providing ramps and braille signs in public buildings so every visitor navigates independently.

**Question 8**
---
### Discuss the importance of cross browser compatibility (3)

Cross-browser compatibility ensures that a webpage functions consistently across major browsers. This is essential for maintaining accessibility and reliability for all users.

Different browsers interpret could CSS and JavaScript slightly differently due to variations in rendering engines. Without cross-browser compatibility, elements may appear misaligned, scripts may fail, or features may behave unpredictably. Ensuring compatibility protects usability by delivering the same behaviour to all users regardless of the browser they are using.

Testing in multiple browsers also supports professional standards because users access the web through diverse platforms. Consistency also enhances credibility and reduces maintenance costs by preventing issues that emerge only for specific browsers.

For example, using prefixes such as `-webkit-` or `-moz-` ensures that Flexbox functions correctly on older browser versions that do not fully support the standardised syntax.

This situation resembles ensuring a document prints correctly on different printers; each device uses different drivers but must produce the same outcome.

**Question 9**
---
### Explain the use of `<canvas>` tag in HTML design? Give an example. (2) 

The `<canvas>` tag creates a programmable drawing surface in HTML that allows developers to render graphics, animations, and interactive visual elements.

The canvas element provides a blank space where JavaScript is able to draw shapes, images, graphs, or animations. It supports dynamic visual content without relying on external plugins. This makes it valuable for data visualisation, simple games, and custom interface components.

For example, JavaScript uses the `getContext("2d")` method to draw a filled rectangle on the canvas, forming part of a visual dashboard or animation.

A canvas functions as a digital frame where JavaScript acts as the paintbrush.

**Question 10**
---
### Justify why the world wide web wasn’t ‘designed’ to be ‘secure’ when it first emerged in the 1980s. (5)

The World Wide Web lacked built-in security during its early development because its original purpose was information sharing within trusted academic and research environments. Security threats were not prioritised.

In the 1980s, the internet served a small community of researchers who valued openness, collaboration, and free exchange of ideas. The environment assumed trust, so the design focused on connectivity and openness rather than protection. Since users operated within a controlled network, limited resources was placed on encryption, authentication, and confidentiality. Computers during that time did not have a lot of processing power, so taking away precious resources for encryption didn't come to mind. Developers prioritised access over defence because malicious activity was not widespread at the time.

As the web expanded into commercial and public domains, the absence of early security foundations became a vulnerability. Modern attacks highlight the limitations of the original design, prompting the introduction of additional layers such as HTTPS, secure protocols, firewalls, and authentication systems.

For example, early HTTP transmitted data in plain text because encrypted communication was unnecessary and took too many processing power in closed research networks. When the web evolved into a public platform, this approach exposed passwords, financial data, and personal information to interception.

This resembles constructing a small community library without locks because everyone knows one another. When the community expands into a large city, those missing locks become security risks.

