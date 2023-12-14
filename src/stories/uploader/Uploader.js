export const Uploader = (args) => {
  const imageUploader = document.createElement('div')
  imageUploader.innerHTML = `
    <div class="uploader__field">
      <input
        id="image"
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        aria-hidden="true"
        hidden
        ${args.multiple ? 'multiple' : ''}
      />
      <label for="image" class="uploader__label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13.75C6.58579 13.75 6.25 13.4142 6.25 13V7.75H1C0.585786 7.75 0.25 7.41421 0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H6.25V1C6.25 0.585786 6.58579 0.25 7 0.25C7.41421 0.25 7.75 0.585786 7.75 1V6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H7.75V13C7.75 13.4142 7.41421 13.75 7 13.75Z"/>
        </svg>
      </label>
    </div>`

  const multiple = args.multiple ? `uploader--multiple` : ''
  imageUploader.className = ['uploader', 'js-upload', multiple].join(' ')

  return imageUploader
}