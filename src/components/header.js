const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const h1 = document.createElement('h1');

  span1.textContent = date;
  h1.textContent = title;
  span2.textContent = temp;

  span1.classList.add('date');
  span2.classList.add('temp');

  headerDiv.appendChild(span1);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(span2);
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headerDiv
}
// Header('this is a title','04/09/2021','65');

const headerAppender = (selector) => {
  const headerContainer = document.querySelector(selector)
  const header = Header('this is a title','04/09/2021','65');


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
headerContainer.append(header)
}

export { Header, headerAppender }
