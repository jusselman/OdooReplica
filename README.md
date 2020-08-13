# Odoo - Replicating a PDF into an interactive Web Experience

## Techonologies Used:
    - HTML, CSS, Javascript, Bootstrap, JQuery

## My Process

    In order to convert the pdf calendar into a functional website, I first began by scaffolding the html. I broke
    the page down into three main groupings: 

- Navigation: The purple navbar at the top of the page containing various links to a menu, the company logo, options for scheduling, chat, bug fixes and user. I contained all these in a nav tag broken into two segments, the items on the left, and those on the right. In addition I used CSS Flex-Box to position the nav-items.

- Search: This section contains the company logo, a search bar, options to navigate the calendar by day or months, a means of adding new events and the option to compress or decompress said data. The final section contains controls to filter results by groups, favorites, as well as icon to change the view of these results; Here I simply divided the section into four quandrant with CSS Grid.

- Calendar/Schedule: The final section comprises an agenda where new items are to be added, subtracted, edited or deleted. The current items are simply hard-coded into the interface for the sake of previewing the design and functionality of the agenda. Obviously in real life these items would be dynamically generated and stored in a database. 

The functionality we see here pertains to collapsing the items in color containing letters. This effect is achieved simply with a function in javascript where upon clicking the button to the left of the 'Primary' tag toggle a CSS class off and on to affect the visibility of the agenda items. Furthermore hovering over the teal and orange items will display a modal with two options to 'PLAN' or 'CREATE'. The same modal will appear when clicking on an unoccupied time slot. The hover modal is achieved through Bootstrap's built-in modal pop-up tag, beginning on html line 220, and simply applying the ID "#basicExampleModal" to the effected element. The functionality to pop up the 'PLAN/CREATE' modal is taken care of with a click event, firing off provided the click takes place within the proper agenda area. 

## My Take

- With regards to my opinion of this layout, I find it overall aesthetic and intuitive. Anyone who has used a computer in their lifetime could easier decipher what's going on on this page in no time. The colors of the scheduled items are easily distinguished from the grey items above them and the layout of the calendar dates makes the layout extremely easy to read. 

- If I could make some ammendments, personally the two things I try to avoid in design are negative space and clutter. This page doesn't have a significant amount of either, however, if I could change it I would get rid of the grey 
'trez' about the add button on the left side of the screen and divide the 'search' section into thirds: the teal buttons on the left, the filter section in the middle, and the search would remain on the left. 

- The 'trez' seems to the be the corporate name, which obviously we want to stick out. I would offset ommitting it from the search section by emphasizing it in the top right of the navbar. I would increase the size slightly and move all the other items to the right side of the screen. I'm not sure if the two large lower case 'p's are meant to be a corporate logo, but given the context it's not really clear. I would replace that with an SVG of some type of logo that captures whatever product Trez is providing. By moving the links and tools of the navbar to the right, when the viewer focuses their attention on the company name and logo. 

## Conclusion

- Odoo seems to have an affinity toward producing technologies that extremely user-friendly and intuitive. Being as this page was meant solely for viewing on large screen widths, feel free to minimize as much as you desire, but going much lower than 1080px is going to make the page look like a baked potatoe. I looking forward to meeting the marketing and development teams.

Saludos,

Joshua
