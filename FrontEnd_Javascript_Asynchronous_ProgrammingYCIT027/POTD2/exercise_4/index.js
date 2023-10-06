function linkInfo() {
  var links = document.getElementsByTagName("a");

  if (links.length === 0) {
    return "Link Count is zero";
  } else {
    return (
      "Total Links: ",
      links.length,
      ", First link: ",
      links[0].href,
      ", Last link: ",
      links[links.length - 1].href
    );
  }
}
