export default function(state, action) {
    switch (action.type) {
      case "ADD_NAME":
        const { name } = action.payload;
        const newList = [...state.nameList, name]; // Doğru şekilde diziyi genişletiyoruz
        return { ...state, nameList: newList };

      case "CLEAN_ALL":
        return {...state, nameList: []} 
        
      case "SAVE_USER":
        const {username} = action.payload;
        return {...state, username: username }  
        
      default:
        return state; // Ana durumu döndürmeyi unutmayın
    }
  }
  