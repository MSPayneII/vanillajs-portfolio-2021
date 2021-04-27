const portfolioGrid = document.querySelector(".portfolio__grid");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = btnContainer.querySelectorAll(".filter-btn");

// console.log(filterBtns);
// Load Projects
window.addEventListener("DOMContentLoaded", () => {
  displayProjectItems(projects);
});

// Filter Projecs
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;

    // console.log(category);
    const projectCategory = projects.filter((projectItem) => {
      //   console.log(projectItem.category);
      if (projectItem.category === category) {
        // console.log(projectItem.category);
        // console.log(projectItem);
        return projectItem;
      }
    });
    // console.log(projectCategory);
    displayProjectItems(projectCategory);
  });
});

const displayProjectItems = (projectItem) => {
  let displayProjects = projectItem.map((project) => {
    // console.log(project);
    return `<a href=${project.url} target="_blank"class="project">
              <article class="project__container">
                <div
                  class="project__image"
                  style="
                    background-image: url(${project.img});
                  "
                ></div>
                <section class="project__text">
                  <h2 class="project__title">${project.title}</h2>
                  <h3 class="project__client">${project.client}</h3>
                  <!-- <h4 class="project__category">User Research</h4> -->
                  <p class="project__description">
                    ${project.desc}
                  </p>
                </section>
              </article>
            </a>`;
  });
  displayProjects = displayProjects.join("");
  portfolioGrid.innerHTML = displayProjects;
  //   console.log(displayProjects);
};
