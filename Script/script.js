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


    var inputName=document.getElementById("name");
    var inputEmail=document.getElementById("email");
    var inputPassword=document.getElementById("pw");
    var errname=document.getElementById("errname");
    var erremail=document.getElementById("erremail");
    var errpassw = document.getElementById("errpassw");
    function ValidateForm(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        let isValid = true;

        // Réinitialisation des messages d'erreur
        errname.textContent = "";
        erremail.textContent = "";
        errpassw.textContent = "";
        inputName.style.border = "";
        inputEmail.style.border = "";
        inputPassword.style.border = "";

        if (inputName.value === "" || inputName.value == null) {
            inputName.style.border = "2px solid red";
            errname.textContent = "Enter your name!";
            isValid = false;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputEmail.value)) {
            inputEmail.style.border = "2px solid red";
            erremail.textContent = "Enter a valid email!";
            isValid = false;
        }
        
        if (inputPassword.value.length <= 6) {
            inputPassword.style.border = "2px solid red";
            errpassw.textContent = "Enter a longer password!";
            isValid = false;
        }

        // Soumettre le formulaire si tous les champs sont valides
        if (isValid) {
            // Optionnel : si le formulaire doit être soumis, activer l'action suivante
            alert("Formulaire soumis avec succès!");
        }
    }
