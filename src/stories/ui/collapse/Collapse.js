export const Collapse = (args) => {
  const collapse = document.createElement('div')
  collapse.classList.add('collapse')
  collapse.innerHTML = `
    <div class="collapse__header">
      ${args.title}
      <button class="collapse__btn button button--icon">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99961 7.05001L0.872871 1.90059C0.583695 1.61013 0.584213 1.14041 0.87403 0.850592C1.1643 0.560322 1.63492 0.560322 1.92519 0.850592L5.99961 4.92501L10.074 0.850592C10.3643 0.560322 10.8349 0.560322 11.1252 0.850592C11.415 1.14041 11.4155 1.61013 11.1263 1.90059L5.99961 7.05001Z" />
        </svg>
      </button>
    </div>
    <div class="collapse__body">
      ${args.body}
    </div>`

  return collapse
}