

export function initialAuth(url){
  let urlArray = url.split('?aid=');
  let aid = urlArray[1];
  this.$store.commit('getMenuList', aid);
}

