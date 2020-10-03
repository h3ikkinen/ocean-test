document.addEventListener('DOMContentLoaded', () => {
    // animations 
    function toggleClass(item, itemActiveClass) {
        if (item.classList.contains(itemActiveClass)) {
            item.classList.remove(itemActiveClass);
        } else if (!item.classList.contains('active')) {
            item.classList.toggle(itemActiveClass);
        }
    }

    //spoiler 

    const spoilerTriggers = document.querySelectorAll('.spoiler');
    spoilerTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            toggleClass(item, 'active');
        });
    });

    //Closemodal 
    const modal = document.querySelector('.callModal'),
          modalOverlay = document.querySelector('.overlay'),
          modalTrigger = document.querySelector('.modal_trigger'),
          modalClose = document.querySelector('.callModal__close'),
          modalBtn = document.querySelector('.callModal_btn');

    modalTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleClass(modal, 'active');
    });
    modalClose.addEventListener('click', () => {
        toggleClass(modal, 'active');
    });
    modalOverlay.addEventListener('click', (e) => {
        if (e.target == modalOverlay && e.target != document.querySelector('.callModal__body')) {
            toggleClass(modal, 'active');
        }
    });
    modalBtn.addEventListener('click', () => {
        toggleClass(modal, 'active');
    });
    
    // header spoilers mobile
    const mobileHeadItems = document.querySelectorAll('.tabheader__item_mobile'),
          mobileHeadContents = document.querySelectorAll('.tabcontent_mobile');
    
    mobileHeadItems.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            toggleClass(item, 'active');
            toggleClass(mobileHeadContents[i], 'active');
        });
    });
    // tab 

    const tabsHead = document.querySelectorAll('.tabheader__item'),
          tabsContentHead = document.querySelectorAll('.tabcontent'),
          tabsParentHead = document.querySelector('.tabheader__items');
    function selectTabs(tabs, tabsContent, tabsParent) {
        function hideTabContent() {
		// console.log(tabsContent);
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        // параметры по умолчанию 
        function showTabContent(i) { // 0 - параметр по умолчанию
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    
        hideTabContent();
    
        // showTabContent(i);
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
			// console.log(target.parentNode.classList.contains('tabheader__item'));
            if (target && target.closest('.tabheader__item') || target && target.parentNode.classList.contains('tabheader__item')) {
                tabs.forEach( (item, i) => {
                    if (target.closest('.tabheader__item') == item || target.parentNode.classList.contains('tabheader__item') == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
    //1
    selectTabs(tabsHead, tabsContentHead, tabsParentHead);
    tabsParentHead.addEventListener('click', selectTabs(tabsHead, tabsContentHead, tabsParentHead));
    //2
    

    //burger desktop
    const menuBurgerTrigger = document.querySelector('.menu__trigger'),
          menuBurgerBody = document.querySelector('.header__burgerMenu'),
          menuBurgerMobile = document.querySelector('.header__burgerMenu_mobile');
    
    menuBurgerTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleClass(menuBurgerBody, 'active');
        toggleClass(menuBurgerMobile, 'active');
        toggleClass(document.querySelector('.menu__trigger > span'), 'active');
        if (menuBurgerBody.classList.contains('active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = '';
        }
    }); 

    //scroll 
    new SimpleBar(document.getElementById('test'), {
        autoHide: true,
        forceVisible: false,
        classNames: {
          resizeWrapper: 'simplebar-resize-wrapper',
          content: 'simplebar-content',
          offset: 'simplebar-offset',
          mask: 'simplebar-mask',
          wrapper: 'simplebar-wrapper',
          placeholder: 'simplebar-placeholder',
          scrollbar: 'simplebar-scrollbar',
          track: 'simplebar-track',
          heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
          heightAutoObserverEl: 'simplebar-height-auto-observer',
          visible: 'simplebar-visible',
          horizontal: 'simplebar-horizontal',
          vertical: 'simplebar-vertical',
          hover: 'simplebar-hover',
          dragging: 'simplebar-dragging'
        },
        scrollbarMinSize: 15,
        scrollbarMaxSize: 0,
        direction: 'ltr',
        timeout: 1000
    })

});