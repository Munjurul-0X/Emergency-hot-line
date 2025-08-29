1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1) answer : getElementById("id") নির্দিষ্ট id এর একটাই element আনে

getElementsByClassName("class") নির্দিষ্ট class এর সব element আনে (HTMLCollection)

querySelector("selector") CSS selector দিয়ে প্রথম matching element আনে

querySelectorAll("selector")  CSS selector দিয়ে সব matching element আনে (NodeList)

2) How do you create and insert a new element into the DOM?

2) answer : 1. নতুন element তৈরি করা
const newDiv = document.createElement("div");

 2. লেখা বা content যোগ করা
newDiv.textContent = এটি আমার নতুন div!;

 3. DOM এ element ঢোকানো
document.body.appendChild(newDiv);

createElement() নতুন element বানায়

textContent  element এর লেখা দেয়

appendChild()  element কে DOM এ যোগ করে

3) What is Event Bubbling and how does it work?

3) answer : Event Bubbling

Event প্রথমে child element এ হয় তারপর parent  তার parent  document পর্যন্ত চলে যায়।


button.addEventListener("click", () => console.log("Button clicked!"));
div.addEventListener("click", () => console.log("Div clicked!"));

 Button এ click করলে প্রথমে button তারপর div এর event চলে।

4. What is Event Delegation in JavaScript? Why is it useful?

4) answer : Event Delegation

Parent element এ একটি event listener বসানো হয় child elements এর জন্য।

Event bubbling হয়ে parent এ আসে আর parent দেখে কোন child element এ event ঘটেছে।


document.getElementById("list").addEventListener("click", (e) => {
  if(e.target.tagName === "LI") console.log("Clicked:", e.target.innerText);
});

কেন দরকার?

অনেক element এর জন্য আলাদা listener লাগেনা

নতুন element যোগ হলেও কাজ করে

5) What is the difference between preventDefault() and stopPropagation() methods?

5) answer :  preventDefault() vs stopPropagation()

Method	কাজ কি?

preventDefault()	Event এর ডিফল্ট কাজ বন্ধ করে (যেমন form submit এ page reload বন্ধ করা)
stopPropagation()	Event bubbling বন্ধ করে, parent এ যায় না


form.addEventListener("submit", e => e.preventDefault()); // ডিফল্ট submit বন্ধ
button.addEventListener("click", e => e.stopPropagation()); // bubbling বন্ধ
