class {
  getMsg(){
    return requestApi_("returnHello", {name: "Eri"}).message
  }
}
