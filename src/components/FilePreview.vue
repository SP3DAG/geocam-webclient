<template>
	<component :is="tag" class="file-preview">
		<button @click="$emit('remove', file)" class="close-icon">&times;</button>
		<img :src="file.url" :alt="file.file.name" :title="file.file.name" />

		<span class="status-indicator loading-indicator" v-show="file.status == 'loading'">In Progress</span>
		<span class="status-indicator success-indicator" v-show="file.status == true">Finished</span>
		<span class="status-indicator failure-indicator" v-show="file.status == false">Error</span>
	</component>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
	file: { type: Object, required: true },
	tag: { type: String, default: 'li' },
})

defineEmits(['remove'])
</script>

<style scoped>
.file-preview {
	width: 40%;
	margin: 1rem 2.5%;
	position: relative;
	aspect-ratio: 1/1;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	.close-icon, .status-indicator {
		--size: 20px;
		position: absolute;
		line-height: var(--size);
		height: var(--size);
		border-radius: var(--size);
		box-shadow: 0 0 5px currentColor;
		right: 0.25rem;
		appearance: none;
		border: 0;
		padding: 0;
	}

	.close-icon {
		width: var(--size);
		font-size: var(--size);
		background: var(--grey);
		color: var(--white-soft);
		top: 0.25rem;
		cursor: pointer;
	}

	.status-indicator {
		font-size: calc(0.75 * var(--size));
		bottom: 0.25rem;
		padding: 0 10px;
	}

	.loading-indicator {
		animation: pulse 1.5s linear 0s infinite;
		color: var(--white-soft);
	}

	.success-indicator {
		background: var(--light-green);
		color: var(--black);
	}

	.failure-indicator {
		background: var(--error-red);
		color: var(--white-soft);
	}
}

@keyframes pulse {
	0% {
		background: var(--black-grad);
	}

	50% {
		background: var(--blue-grad);
	}

	100% {
		background: var(--black-grad);
	}
}
</style>