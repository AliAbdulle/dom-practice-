// 1. Use JavaScript to obtain a reference to the first section with the 
// class of article_header and change its text with the textContent 
// property to "Welcome to the {insert your name here} blog"

const sectionEl = document.querySelector(".article__header")
sectionEl.textContent = "Welcome to Ali Abdulle's blog"

// 2. Use JavaScript to obtain a reference to all article__header elements and 
// change their classList property value to article__header important.

const sectionEl2 = document.querySelectorAll(".article__header")
for (let i = 0; i < sectionEl2.length; i++) {
   sectionEl2[i].classList.add("important")
    
}
// 3. Obtain a reference the element with a class of dashed and remove it.

const sectionEl3 = document.querySelector(".dashed")
sectionEl3.classList.remove("dashed")

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.


const sectionEl4 = document.querySelector(".article__footer")
   sectionEl4.classList.add("goldenrod")


