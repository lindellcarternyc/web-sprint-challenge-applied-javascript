const Header = (title, date, temp) => {
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
  const header = document.createElement('div')
  header.className = 'header'

  const dateEl = document.createElement('span')
  dateEl.className = 'date'
  dateEl.textContent = date
  header.appendChild(dateEl)

  const h1 = document.createElement('h1')
  h1.textContent = title
  header.appendChild(h1)

  const tempEl = document.createElement('span')
  tempEl.className = 'temp'
  tempEl.textContent = temp
  header.appendChild(tempEl)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = Header('Lambda Times', 'Feb 12, 2020', '21°')
  document.querySelector(selector).appendChild(header)
}

export { Header, headerAppender }
