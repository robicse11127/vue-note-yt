import { defineStore } from 'pinia';

export const useNoteStore = defineStore( 'noteStore', {

	state: () => ({
		notes: [
			{ id: 1, title: 'Note title one', conent: 'Note one content', timestamp: Date.now(), pinned: false },
			{ id: 2, title: 'Note title two', conent: 'Note two content', timestamp: Date.now(), pinned: true },
			{ id: 3, title: 'Note title three', conent: 'Note three content', timestamp: Date.now(), pinned: true },
			{ id: 4, title: 'Note title four', conent: 'Note four content', timestamp: Date.now(), pinned: false },
			{ id: 5, title: 'Note title five', conent: 'Note five content', timestamp: Date.now(), pinned: false },
		]
	}),
	getters: {
		allNotes: ( state ) => {
			return state.notes;
		},

		pinnedNotes: ( state ) => {
			return state.notes.filter( note => note.pinned );
		}
	},
	actions: {
		markedAsPinned( id ) {
			const updateNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = true;
					return item;
				}

				return item;
			} );

			this.notes = updateNotes;
		},

		markedAsUnPinned( id ) {
			const updateNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = false;
					return item;
				}

				return item;
			} );

			this.notes = updateNotes;
		}
	}

} );