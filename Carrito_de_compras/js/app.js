// Variables
const cart = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const listCourses = document.querySelector('#lista-carrito tbody');
const emptyCartButton = document.getElementById('vaciar-carrito');

// Listeners
loadEventListeners();

function loadEventListeners() {
  // When is pushed "Add to cart"
  courses.addEventListener('click', buyCourse);

  // When a course is deleted
  cart.addEventListener('click', deleteCourse);

  // Empty the cart
  emptyCartButton.addEventListener('click', emptyCart);

  // Show the loaded items in local storage
  document.addEventListener('DOMContentLoaded', loadLocalStorage);
}

// Functions

// Adds the course to the cart
function buyCourse(e) {
  e.preventDefault();
  // delegation to add to the cart
  if(e.target.classList.contains('agregar-carrito')) {
    const course = e.target.parentElement.parentElement;
    // Send the selected course to take its data
    readCourseData(course);
  };
}

// Read the data from the course
function readCourseData(course) {
  const infoCourse = {
    image: course.querySelector('img').src,
    title: course.querySelector('h4').textContent,
    price: course.querySelector('.precio span').textContent,
    id: course.querySelector('a').getAttribute('data-id')
  }
  insertCart(infoCourse);
}

// Shows selected course in the cart
function insertCart(course) {
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>
    <img src="${course.image}" width="100">
  </td>
  <td>${course.title}</td>
  <td>${course.price}</td>
  <td>
    <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
  </td>
  `;
  listCourses.appendChild(row);
  saveCourseLocalStorage(course);
}



// Delete a course from the cart in DOM
function deleteCourse(e) {
  e.preventDefault();
  let course, courseId;
  if (e.target.classList.contains('borrar-curso')) {
    e.target.parentElement.parentElement.remove();
    course = e.target.parentElement.parentElement;
    courseId = course.querySelector('a').getAttribute('data-id');
  }
  deleteCourseLocalStorage(courseId);
}

// Delete cart courses in DOM
function emptyCart() {
  // fast way
  //listCourses.innerHTML = '';

  // slow way (recommended)
  while(listCourses.firstChild) {
    listCourses.removeChild(listCourses.firstChild);
  }
  // empty local storage
  emptyLocalStorage();

  return false;
}

// Save courses in the cart to local storage
function saveCourseLocalStorage(course) {
  let courses;

  courses = getCoursesLocalStorage();
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
}

// Check there's elements in local storage
function getCoursesLocalStorage() {
  let coursesLocalStorage;

  // Check if there's something in local storage
  if(localStorage.getItem('courses') === null) {
    coursesLocalStorage = [];
  } else {
    coursesLocalStorage = JSON.parse(localStorage.getItem('courses'));
  }
  return coursesLocalStorage;
}

// Show local storage courses in cart
function loadLocalStorage() {
  let coursesLocalStorage;

  coursesLocalStorage = getCoursesLocalStorage();
  coursesLocalStorage.forEach(course => {
    // Load the template
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
      <img src="${course.image}" width="100">
    </td>
    <td>${course.title}</td>
    <td>${course.price}</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
    </td>
    `;
    listCourses.appendChild(row);
    });
}

// Delete course from local storage
function deleteCourseLocalStorage(course) {
  let coursesLocalStorage;

  coursesLocalStorage = getCoursesLocalStorage();

  // compare id deleted course with the ones in local storage
  coursesLocalStorage.forEach((courseLocalStorage, index) => {
    if(courseLocalStorage.id === course) {
      coursesLocalStorage.splice(index, 1);
    }
  });

  // Add the actual array to local storage
  localStorage.setItem('courses', JSON.stringify(coursesLocalStorage));
}

// Delete curses from local storage
function emptyLocalStorage() {
  localStorage.clear();
}
