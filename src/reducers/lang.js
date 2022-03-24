const INITIAL_STATE = 'pt_BR';

function lang(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'change-lang':
      return action.lang;
    default:
      return state;
  }
}

export default lang;
