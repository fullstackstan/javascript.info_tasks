<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
// For each of the following, give at least one way of how to access them:

// The <div> DOM node?  document.body.div; document.childNodes.childNodes[0]; document.
// The <ul> DOM node?   document.body.ul; document.childNodes[0].childNodes
// The second <li> (with Pete)?  document.documentElement.body.ul.li.nextSibling.text



// If elem – is an arbitrary DOM element node…

// Is it true that elem.lastChild.nextSibling is always null? yes
// Is it true that elem.children[0].previousSibling is always null ? false because 

    let table = document.body.firstElementChild;
    for (let i=0;i<5;i++){
    let td = table.rows[i].cells[i];
    td.style.backgroundColor = "red"
    }