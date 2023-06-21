// export function createApp() {
//     function handleSettingsFormSubmit(event) {
//       event.preventDefault();
      
//       const formData = new FormData(event.target);
//       const { theme } = Object.fromEntries(formData);
  
//       if (theme === "night") {
//         document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
//         document.documentElement.style.setProperty("--color-light", "10, 10, 20");
//       } else {
//         document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
//         document.documentElement.style.setProperty("--color-light", "255, 255, 255");
//       }
  
//       const settingsOverlayElement = document.querySelector("[data-settings-overlay]");
//       if (settingsOverlayElement) {
//         settingsOverlayElement.setAttribute("open", "false");
//       }
//     }
  
//     function handleSearchFormSubmit(event) {
//       event.preventDefault();
      
//       const formData = new FormData(event.target);
//       const filters = Object.fromEntries(formData);
//       const result = [];
  
//       for (const book of books) {
//         let genreMatch = filters.genre === "any";
  
//         for (const singleGenre of book.genres) {
//           if (genreMatch) break;
//           if (singleGenre === filters.genre) {
//             genreMatch = true;
//           }
//         }
  
//         if (
//           //@ts-expect-error
//           (filters.title.trim() === "" ||
//           //@ts-expect-error
//             book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
//           (filters.author === "any" || book.author === filters.author) &&
//           genreMatch
//         ) {
//           result.push(book);
//         }
//       }
  
//       page = 1;
//       matches = result;
  
//       const listMessageElement = document.querySelector("[data-list-message]");
//       if (listMessageElement) {
//         if (result.length < 1) {
//           listMessageElement.classList.add("list__message_show");
//         } else {
//           listMessageElement.classList.remove("list__message_show");
//         }
//       }
  
//       const listItemsElement = document.querySelector("[data-list-items]");
//       if (listItemsElement) {
//         listItemsElement.innerHTML = "";
//         const newItems = document.createDocumentFragment();
  
//         for (const { author, id, image, title } of result.slice(
//           0,
//           BOOKS_PER_PAGE
//         )) {
//           const element = document.createElement("button");
//           element.classList.add("preview");
//           element.setAttribute("data-preview", id);
  
//           element.innerHTML = `
//             <img
//               class="preview__image"
//               src="${image}"
//             />
            
//             <div class="preview__info">
//               <h3 class="preview__title">${title}</h3>
//               <div class="preview__author">${authors[author]}</div>
//             </div>
//           `;
  
//           newItems.appendChild(element);
//         }
  
//         listItemsElement.appendChild(newItems);
//       }
  
//       const listButtonElement = document.querySelector("[data-list-button]");
//       if (listButtonElement) {
//         //@ts-expect-error
//         listButtonElement.disabled = matches.length - page * BOOKS_PER_PAGE < 1;
  
//         listButtonElement.innerHTML = `
//           <span>Show more</span>
//           <span class="list__remaining"> (${
//             matches.length - page * BOOKS_PER_PAGE > 0
//               ? matches.length - page * BOOKS_PER_PAGE
//               : 0
//           })</span>
//         `;
//       }
  
//       window.scrollTo({ top: 0, behavior: "smooth" });
  
//       const searchOverlayElement = document.querySelector("[data-search-overlay]");
//       if (searchOverlayElement) {
//         searchOverlayElement.setAttribute("open", "false");
//       }
//     }
  
//     function handleListItemClick(event) {
     
//       const pathArray = Array.from(event.path || event.composedPath());
//       let active = null;
  
//       for (const node of pathArray) {
//         if (active) break;
  
//         if (node && node.dataset && node.dataset.preview) {
//           let result = null;
  
//           for (const singleBook of books) {
//             if (result) break;
//             if (singleBook.id === node.dataset.preview) result = singleBook;
//           }
  
//           active = result;
//         }
//       }
  
//       if (active) {
//         const listActiveElement = document.querySelector("[data-list-active]");
//         if (listActiveElement instanceof HTMLElement) {
//           //@ts-expect-error
//           listActiveElement.open = true;
//           const listBlurElement = document.querySelector("[data-list-blur]");
//           if (listBlurElement instanceof HTMLImageElement) {
//             listBlurElement.src = active.image;
//           }
//           const listImageElement = document.querySelector("[data-list-image]");
//           if (listImageElement instanceof HTMLImageElement) {
//             listImageElement.src = active.image;
//           }
//           const listTitleElement = document.querySelector("[data-list-title]");
//           if (listTitleElement instanceof HTMLElement) {
//             listTitleElement.innerText = active.title;
//           }
//           const listSubtitleElement = document.querySelector(
//             "[data-list-subtitle]"
//           );
//           if (listSubtitleElement instanceof HTMLElement) {
//             listSubtitleElement.innerText = `${authors[active.author]} (${new Date(
//               active.published
//             ).getFullYear()})`;
//           }
//           const listDescriptionElement = document.querySelector(
//             "[data-list-description]"
//           );
//           if (listDescriptionElement instanceof HTMLElement) {
//             listDescriptionElement.innerText = active.description;
//           }
//         }
//       }
//     }
  
//     return {
//       handleSettingsFormSubmit,
//       handleSearchFormSubmit,
//       handleListItemClick
//     };
//   }

//   const myApp = createApp();
// const settingsForm = document.querySelector("[data-settings-overlay]");
// if (settingsForm) {
//   settingsForm.addEventListener("submit", myApp.handleSettingsFormSubmit);
// }

// const searchForm = document.querySelector("[data-search-overlay]");
// if (searchForm) {
//   searchForm.addEventListener("submit", myApp.handleSearchFormSubmit);
// }

// const listItem = document.querySelector("[data-list-items]");
// if (listItem) {
//   listItem.addEventListener("click", myApp.handleListItemClick);
// }