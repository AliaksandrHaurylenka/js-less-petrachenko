function tabs(){
  class HideShowTab {
    constructor(info, tab, tabContent, showCSS, hideCSS){
      this.info = document.querySelector('.' + info);
      this.tab = document.querySelectorAll('.' + tab);
      this.tabContent = document.querySelectorAll('.' + tabContent);
      this.showCSS = showCSS;
      this.hideCSS = hideCSS;
      this.info.onclick = this.clickTab.bind(this);
    }
  
    hideTabContent(a){
      for(let i = a; i < this.tabContent.length; i++){
        this.tabContent[i].classList.remove(this.showCSS);
        this.tabContent[i].classList.add(this.hideCSS);
      }
    }
    
    showTabContent(b){
      if(this.tabContent[b].classList.contains(this.hideCSS)){
        this.tabContent[b].classList.remove(this.hideCSS);
        this.tabContent[b].classList.add(this.showCSS);
      }
    }

    clickTab(){
      let target = event.target;
      for(let i = 0; i < this.tab.length; i++){
        if(target == this.tab[i]){
          this.hideTabContent(0);
          this.showTabContent(i);
          break;
        }
      }
    } 
  }
  let tab = new HideShowTab('info', 'info-header-tab', 'info-tabcontent', 'show', 'hide');
  tab.hideTabContent(1);
}

module.exports = tabs;