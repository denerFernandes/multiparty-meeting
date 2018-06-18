const initialState =
{
	url               : null,
	state             : 'new', // new/connecting/connected/disconnected/closed,
	activeSpeakerName : null,
	showSettings      : false,
	advancedMode      : false
};

const room = (state = initialState, action) =>
{
	switch (action.type)
	{
		case 'SET_ROOM_URL':
		{
			const { url } = action.payload;

			return { ...state, url };
		}

		case 'SET_ROOM_STATE':
		{
			const roomState = action.payload.state;

			if (roomState == 'connected')
				return { ...state, state: roomState };
			else
				return { ...state, state: roomState, activeSpeakerName: null };
		}

		case 'SET_ROOM_ACTIVE_SPEAKER':
		{
			const { peerName } = action.payload;

			return { ...state, activeSpeakerName: peerName };
		}

		case 'TOGGLE_SETTINGS':
		{
			const showSettings = !state.showSettings;

			return { ...state, showSettings };
		}

		case 'TOGGLE_ADVANCED_MODE':
		{
			const advancedMode = !state.advancedMode;

			return { ...state, advancedMode };
		}

		default:
			return state;
	}
};

export default room;
