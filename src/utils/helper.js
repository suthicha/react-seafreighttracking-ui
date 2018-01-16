
export const setCacheStorage = (key, data) => {
    try{
      localStorage.setItem(key, JSON.stringify(data));
    }catch(error){}
  }
  
  export const getCacheStorage = (key) => {
    try{
      return JSON.parse(localStorage.getItem(key));
    }catch(error){}
    return undefined;
  }

  export function formatDate(date, separate = '') {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return year + separate + month + separate + day;
}
  