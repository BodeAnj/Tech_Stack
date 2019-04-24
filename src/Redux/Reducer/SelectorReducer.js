const INITIAL_STATE=''

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
      case 'select_library':
      return action.payload;

      default:
      return state;
  }
  
}