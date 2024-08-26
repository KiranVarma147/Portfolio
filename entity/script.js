document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey!! I'm Kiran Varma, Computer Science graduate and Software Engineer with 1.7 years of hands-on experience in software engineering, proficient in various programming languages and web technologies. Seeking to leverage my skills and knowledge in a globally recognized organization to contribute to innovative projects and drive mutual growth.";
    const paragraph = document.getElementById("typing-paragraph");
    let index = 0;

    function type() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    type();
});
