
let typedTextContainer = document.getElementById('typedText')

let sentence = {
  strings: [`<font color="blue">const</font> Introduction <font color="white">=</font> <font color="yellow">{</font><br>
    greeting: <font color="#ba7d65">"Hello World!"</font><font color="white">,</font><br>
    name: <font color="#ba7d65">"Gaura Klein"</font><font color="white">,</font><br>
    occupation: <font color="#ba7d65">"Software Developer"</font><br>
    <font color="yellow">}</font><font color="white">;</font>`],
  typeSpeed: 30,
  showCursor: false
};

const typed = new Typed(typedTextContainer, sentence);

typed