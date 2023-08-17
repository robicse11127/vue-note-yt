<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps( [ 'notes', 'title', 'icon', 'type' ] );
</script>

<template>
	<h4 class="rs__sidebar-title" v-if="'list' === type">
		<span class="rs__sidebar-title-note-icon material-symbols-sharp">{{ icon }}</span>
		{{ title }}
	</h4>
	<ul class="rs__note-list" v-if="'list' === type" >
		<li v-for="note in notes" :key="note.id">
			<p>{{ note.title }}</p>
		</li>
	</ul>
</template>