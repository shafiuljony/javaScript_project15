const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click',function () {
    //long way
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }else{
    //     sidebar.classList.add('show-sidebar');
    // }

    //use toggle method
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click',function () {
    sidebar.classList.remove('show-sidebar');
});