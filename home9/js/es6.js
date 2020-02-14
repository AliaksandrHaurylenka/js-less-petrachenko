class HideShowTab {
  constructor(info, tab, tabContent){
    this.info = document.querySelector('.'+info);
    this.tab = document.querySelectorAll('.info-header-tab');
    this.tabContent = document.querySelectorAll('.info-tabcontent');
    // this.a = 
  }

  hideTabContent(a = 1){
    for(let i = a; i < this.tabContent.length; i++){
      this.tabContent[i].classList.remove('show');
      this.tabContent[i].classList.add('hide');
    }
  }
}

let tab = new HideShowTab();
tab.hideTabContent(1);