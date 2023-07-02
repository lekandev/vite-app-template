let scrollbar = document.getElementById("scroll-bar");

let totalHeight = document.body.scrollHeight - window.innerHeight;

export const scrollbarComp = () => {
  window.onscroll = () => {
    console.log(scrollbar);
    let scrollbarHeight = (window.pageYOffset / totalHeight) * 100;
    scrollbar.style.height = `${scrollbarHeight}%`;
  };
};
