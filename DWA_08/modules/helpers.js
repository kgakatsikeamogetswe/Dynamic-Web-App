/**
 *
 * @param {string} dataAttr
 * @param {string} [value]
 * @returns {HTMLElement}
 */
export const getHtml = (dataAttr, value) => {
    const selector = value
      ? `[data-${dataAttr}="${value}"]`
      : `[data-${dataAttr}]`;
    const element = document.querySelector(selector);
    const isHTMLElement = element instanceof HTMLElement;

    if (!isHTMLElement) {
      throw new Error(`${selector} attribute not found in HTML`);
    }

    return element;
  };

//   /**
//  *
//  * @param {string} dataAttr
//  * @param {string} [value]
//  * @returns {Boolean}
//  */
// export const doesHtmlExist = (dataAttr, value) => {
//     const selector = value
//       ? `[data-${dataAttr}="${value}"]`
//       : `[data-${dataAttr}]`;

//     const element = document.querySelector(selector);
//     const isHTMLElement = element instanceof HTMLElement;
//     return isHTMLElement;
//   };