document.addEventListener("DOMContentLoaded", function () {
  // 1. Suppose you want to select the title "Wonders from Antiquity" of our web page.
  console.log(document.querySelectorAll("h2")[0].textContent);

  // 2. Selecting the first h2 element: For this task do the following:
  // Get all h2 elements into an array
  // Show the first h2 element
  // total number of h2 elements in the page)
  const h2s = document.querySelectorAll("h2");
  const h2Array = Array.from(h2s);
  const nbrH2 = h2Array.length;
  const firstH2 = nbrH2 === 0 ? "no element" : h2Array[0].textContent;
  console.log(
    "First h2 element:",
    firstH2,
    " - Total number of h2 elements in the page: ",
    nbrH2
  );

  // 3. Show all the elements which belong to class “exists”
  const exists = document.querySelectorAll(".exists");
  exists.forEach((e) => {
    console.log(e.innerHTML);
  });

  // 4. Show the element with id "new"
  console.log(document.getElementById("new").innerHTML);

  // 5. Pick all the <li> elements of wonders that are both ancient and still exist
  const existingAncientWonders =
    document.querySelectorAll("#ancient li.exists");
  const list = Array.from(existingAncientWonders);
  list.forEach((e) => {
    console.log(e.innerHTML);
  });

  // 6.  Use querySelectorAll(), display the count or length for the following:
  // a. All paragraphs
  // b. All paragraphs inside the “content” ID block
  // c. All elements with the “exists” class
  // d. All “ancient” wonders that still exist
  console.log("All paragraphs : ", document.querySelectorAll("p").length);
  console.log(
    'All paragraphs inside the "content" ID block : ',
    document.querySelectorAll("#content p").length
  );
  console.log(
    "All elements with the “exists” class : ",
    document.querySelectorAll(".exists").length
  );
  console.log(
    "All ancient wonders that still exist : ",
    document.querySelectorAll("#ancient li.exists").length
  );

  // 7.  The HTML content of the DOM element with ID "content"
  // console.log(document.getElementById('content').innerHTML);

  // 8.  The textual content of the DOM element with ID "content"
  console.log(document.getElementById("content").textContent);

  // 9.  Show href attribute for the first link
  console.log(document.querySelector("a").getAttribute("href"));

  // 10.  Show ID attribute of the first list
  console.log(document.querySelectorAll("ul")[0].getAttribute("id"));
});
