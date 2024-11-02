var arraySLide = [
    {
        Title: "Basic Template",
        img: "../Images/img1.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere nemo soluta sit dicta dolorem vel pariatur. Repudiandae praesentium nam incidunt, libero dignissimos voluptatum illo assumenda odio distinctio necessitatibus voluptatibus?"
    },
    {
        Title: "Basic Template 2",
        img: "../Images/wp12.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere nemo soluta sit dicta dolorem vel pariatur. Repudiandae praesentium nam incidunt, libero dignissimos voluptatum illo assumenda odio distinctio necessitatibus voluptatibus?"
    },
    {
        Title: "Basic Template 3",
        img: "../Images/srins.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere nemo soluta sit dicta dolorem vel pariatur. Repudiandae praesentium nam incidunt, libero dignissimos voluptatum illo assumenda odio distinctio necessitatibus voluptatibus?"
    },
    {
        Title: "Basic Template 4",
        img: "../Images/656670.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere nemo soluta sit dicta dolorem vel pariatur. Repudiandae praesentium nam incidunt, libero dignissimos voluptatum illo assumenda odio distinctio necessitatibus voluptatibus?"
    }
];
var myimage=document.getElementById("img");
var mytitle=document.getElementById("title");
var mycontent=document.getElementById("content");

var i=0;
function updateSlide() {
    myimage.src = arraySLide[i].img;
    mytitle.textContent = arraySLide[i].Title;
    mycontent.textContent = arraySLide[i].content;
}

function slideshowNext() {
    i = (i + 1) % arraySLide.length; // Increment and wrap around to first slide
    updateSlide();
}

function slideshowPrev() {
    i = (i - 1 + arraySLide.length) % arraySLide.length; // Decrement and wrap around to last slide
    updateSlide();
}