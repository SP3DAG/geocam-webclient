<template>
  <div class="container">
    <div class="main">
      <h1 id="headline">Validate your images here!</h1>
      <DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
        <label for="file-input">
          <span v-if="dropZoneActive">
            <span>Drop Them Here</span>
            <span class="smaller">to add them</span>
          </span>
          <span v-else>
            <span>Drag Your Files Here</span>
            <span class="smaller">
              or <strong><em>click here</em></strong> to select files
            </span>
          </span>

          <input type="file" id="file-input" accept="image/png, image/jpeg" @change="onInputChange" />
        </label>
        <ul class="image-list" v-show="files.length">
          <FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
        </ul>
      </DropZone>
      <button @click.prevent="uploadFiles(files)" class="upload-button">Upload</button>
    </div>
  </div>
</template>

<script setup>
// Components
import DropZone from '@/components/DropZone.vue'
import FilePreview from '@/components/FilePreview.vue'

// File Management
import useFileList from '@/utils/file-list'
const { files, addFiles, removeFile } = useFileList()

function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}

// Uploader
import createUploader from '@/utils/file-uploader'
const { uploadFiles } = createUploader('YOUR URL HERE')
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.main {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.drop-area {
  width: 80vw;
  height: 80vh;
	max-width: 700px;
  max-height: 300px;
	margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
	padding: 50px;
	background: var(--light-grey);
	border: 5px dashed var(--grey);
  border-radius: 20px;
	transition: .2s ease;

	&[data-active=true] {
		background: var(--light-green);
	}
}

label {
	font-size: 36px;
	cursor: pointer;
	display: block;

	span {
		display: block;
	}

	input[type=file]:not(:focus-visible) {
		position: absolute !important;
		width: 1px !important;
		height: 1px !important;
		padding: 0 !important;
		margin: -1px !important;
		overflow: hidden !important;
		clip: rect(0, 0, 0, 0) !important;
		white-space: nowrap !important;
		border: 0 !important;
	}

	.smaller {
		font-size: 16px;
	}
}

.image-list {
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	padding: 0;
}

.upload-button {
	display: block;
	appearance: none;
	border: 0;
	border-radius: 10px;
	padding: 0.75rem 3rem;
	margin: 1rem auto;
	font-size: 1.25rem;
	font-weight: bold;
	background: var(--green);
	color: #fff;
	text-transform: uppercase;
}

button {
	cursor: pointer;
}

#headline{
  margin-bottom: 50px;
}
</style>