let i = 0;
let txt = "Hello";
let txt2 = ", I'm a Full-Stack Developer";
let speed = 60;
let part = 1; // Part 1 for txt, Part 2 for txt2

function typeWriter() {
    if (part === 1) {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            i = 0;
            part = 2; // Move to part 2
            setTimeout(typeWriter, 500);
        }
    } else if (part === 2) {
        if (i < txt2.length) {
            document.getElementById("demo").innerHTML += txt2.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}

window.onload = typeWriter;
