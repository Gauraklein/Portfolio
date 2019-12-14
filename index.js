document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


let typedTextContainer = document.getElementById('typedText')
let possiblyCheesyIntro = [`<font color="blue">const</font> Introduction <font color="white">=</font> <font color="yellow">{</font><br>
  greeting: <font color="#ba7d65">"Hello World!"</font><font color="white">,</font><br>
  name: <font color="#ba7d65">"Gaura Klein"</font><font color="white">,</font><br>
  occupation: <font color="#ba7d65">"Software Developer"</font><br>
  <font color="yellow">}</font><font color="white">;</font>`]

let basicIntro = ["Hi, I'm Gaura Klein <br> and I'm passionate about Software!"]

let sentence = {
  strings: basicIntro,
  typeSpeed: 50,
  showCursor: false
};

const typed = new Typed(typedTextContainer, sentence);

typed