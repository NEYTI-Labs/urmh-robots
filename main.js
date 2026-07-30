import { Fancybox } from "@fancyapps/ui";
import Swiper from 'swiper/bundle';
import { MaskInput } from 'maska';
import 'jquery';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

import './sass/_app.scss';

Fancybox.bind("[data-fancybox]", {});

new MaskInput('[data-maska]');

// ----------------------------------------
// Каталог
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const showCatalog = document.getElementById('show-catalog');

    showCatalog?.addEventListener('click', () => {
        const jalousie = document.querySelector('.jalousie');

        if (window.innerWidth > 992) {
            jalousie?.classList.toggle('active');
        } else {
            jalousie?.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const showCatalog = document.getElementById('show-catalog');
    const basket = document.querySelector('.basket');
    const cross = document.querySelector('.cross');
    const body = document.body;

    showCatalog?.addEventListener('click', () => {
        document
            .querySelector('.header__discount-dropdown')
            ?.classList.remove('active');

        showCatalog.classList.toggle('is_active');

        cross?.classList.toggle('hide');

        document
            .querySelector('.burger-menu')
            ?.classList.remove('active');

        document
            .querySelector('.header__burger')
            ?.classList.remove('is-active');

        document
            .querySelector('.catalog-menu')
            ?.classList.toggle('active');

        if (cross) {
            body.classList.toggle(
                'locked',
                cross.classList.contains('hide')
            );
        }
    });
});


// ----------------------------------------
// Каталог внутри меню
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const firstListItem = document.querySelector(
        '.catalog-menu__list_item'
    );

    const firstInnerItem = document.querySelector(
        '.catalog-menu__inner_item'
    );

    if (firstListItem) {
        firstListItem.classList.add('active');
    }

    if (firstInnerItem) {
        firstInnerItem.classList.add('active');
    }

    document.addEventListener('click', (e) => {
        const listItem = e.target.closest(
            '.catalog-menu__list_item'
        );

        if (!listItem) return;

        // Мобильная версия
        if (window.innerWidth < 992) {
            listItem.classList.toggle('opened');

            const subMenu = listItem.querySelector(
                '.catalog-sub-menu'
            );

            if (subMenu) {
                subMenu.style.display =
                    subMenu.style.display === 'block'
                        ? 'none'
                        : 'block';
            }

            return;
        }

        // Десктоп
        document
            .querySelectorAll('.catalog-menu__list_item')
            .forEach(item => {
                item.classList.remove('active');
            });

        document
            .querySelectorAll('.catalog-menu__inner_item')
            .forEach(item => {
                item.classList.remove('active');
            });

        listItem.classList.add('active');

        const innerItem = document.querySelector(
            `.catalog-menu__inner_item[data-tab="${listItem.dataset.tab}"]`
        );

        if (innerItem) {
            innerItem.classList.add('active');
        }
    });
});


// ----------------------------------------
// Каталог в бургер-меню
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const showCatalogMenu =
        document.querySelector('#show-catalog-menu');

    const catalogMenus =
        document.querySelectorAll('.catalog-menu');

    showCatalogMenu?.addEventListener('click', () => {
        catalogMenus.forEach(menu => {
            menu.classList.toggle('active');
        });
    });
});


// ----------------------------------------
// Закрытие каталога
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const closeMenus =
        document.querySelectorAll('.close-menu');

    closeMenus.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.parentNode
                ?.classList.remove('active');
        });
    });

    const subMenuCloseMenu =
        document.querySelector(
            '.catalog-menu__sublist .close-menu'
        );

    subMenuCloseMenu?.addEventListener('click', () => {
        document
            .querySelectorAll('.catalog-menu__sublist')
            .forEach(menu => {
                menu.classList.remove('active');
            });
    });
});


// ----------------------------------------
// Стрелки подкатегорий каталога
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll(
        '.has-sublist__arrow'
    );

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('active');

            const submenu = arrow
                .closest('.has-sublist')
                ?.querySelector('.catalog-menu__sublist');

            submenu?.classList.toggle('active');
        });
    });
});


// ----------------------------------------
// Бургер
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const toggleClass = (element, className) => {
        element?.classList.toggle(className);
    };

    const burgerButtons = [
        document.getElementById('mobile-burger'),
        document.querySelector('.burger-menu__close')
    ];

    burgerButtons.forEach(button => {
        button?.addEventListener('click', () => {
            toggleClass(button, 'is-active');

            toggleClass(
                document.querySelector('.burger-menu'),
                'active'
            );

            toggleClass(
                document.documentElement,
                'lock'
            );
        });
    });

    document
        .querySelectorAll('.burger-menu__menu_trigger')
        .forEach(trigger => {
            trigger.addEventListener('click', () => {
                toggleClass(
                    trigger.parentElement,
                    'is-active'
                );
            });
        });
});


// ----------------------------------------
// Поиск
// ----------------------------------------

document.addEventListener('click', (event) => {
    const trigger = event.target.closest(
        '.header__search_trigger, .main_search_block_in .close'
    );

    if (!trigger) return;

    const searchPopup =
        document.getElementById('search-popup');

    searchPopup?.classList.toggle('show');

    document.body.classList.toggle(
        'lock',
        searchPopup?.classList.contains('show')
    );

    document
        .querySelector('.header__burger')
        ?.classList.remove('is-active');

    document
        .querySelector('.burger-menu')
        ?.classList.remove('active');
});


// ----------------------------------------
// Закрытие каталога через затемнение
// ----------------------------------------

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('jalousie')) {
        return;
    }

    if (!e.target.classList.contains('active')) {
        return;
    }

    document
        .querySelectorAll('.jalousie')
        .forEach(element => {
            element.classList.remove('active');
        });

    document
        .querySelectorAll('.catalog-menu')
        .forEach(menu => {
            menu.classList.remove('active');
        });

    const cross =
        document.querySelector('#show-catalog .cross');

    const basket =
        document.querySelector('#show-catalog .basket');

    cross?.classList.toggle('hide');
    basket?.classList.toggle('hide');
});


// ----------------------------------------
// Выпадающее меню скидки
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const headerDiscount =
        document.querySelector('.header__discount');

    const headerDiscountDropdown =
        document.querySelector(
            '.header__discount-dropdown'
        );

    const catalogMenu =
        document.querySelector('.catalog-menu');

    const headerCatalogTrigger =
        document.querySelector(
            '.header__catalog_trigger'
        );

    headerDiscount?.addEventListener('click', () => {
        headerDiscountDropdown?.classList.toggle('active');

        catalogMenu?.classList.remove('active');

        headerCatalogTrigger?.classList.remove(
            'is_active'
        );
    });
});


// ----------------------------------------
// Аккордеон каталога
// ----------------------------------------

$(function () {
    $('.sublist__arrow').click(function () {
        $(this).toggleClass('active');

        $(this)
            .siblings('ul')
            .slideToggle();
    });
});


// ----------------------------------------
// Меню "Ещё"
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const menuList =
        document.querySelector('.menu-list');

    const moreMenu =
        document.querySelector('.more-menu');

    const moreSubmenu =
        document.querySelector('.more-submenu');

    if (!menuList || !moreMenu || !moreSubmenu) {
        return;
    }

    const MORE_MENU_INDEX = 4;

    // Клик по "Ещё"
    const moreLink =
        moreMenu.querySelector('.menu-link');

    moreLink?.addEventListener('click', (e) => {
        e.preventDefault();

        moreMenu.classList.toggle('active');
    });


    // Адаптация меню
    function adaptMenu() {
        const navContainer =
            document.querySelector('.nav-container');

        const navRight =
            document.querySelector('.nav-right');

        if (!navContainer || !navRight) {
            return;
        }

        const containerWidth =
            navContainer.offsetWidth;

        const rightWidth =
            navRight.offsetWidth;

        const moreMenuWidth =
            moreMenu.offsetWidth;

        const padding = 180;

        const availableWidth =
            containerWidth -
            rightWidth -
            padding -
            moreMenuWidth;


        // Возвращаем элементы из "Ещё"
        const itemsInSubmenu =
            Array.from(
                moreSubmenu.querySelectorAll('li')
            );

        itemsInSubmenu.forEach(item => {
            const link = item.querySelector('a');

            if (!link) return;

            const linkText =
                link.textContent.trim();

            const existingItem =
                Array.from(
                    menuList.querySelectorAll(
                        '.menu-item:not(.more-menu)'
                    )
                ).find(menuItem => {
                    const menuLink =
                        menuItem.querySelector(
                            '.menu-link'
                        );

                    return (
                        menuLink &&
                        menuLink.textContent.trim() ===
                            linkText
                    );
                });

            if (!existingItem) {
                const newItem =
                    document.createElement('li');

                newItem.className =
                    item.dataset.originalClass ||
                    'menu-item';

                const newLink =
                    link.cloneNode(true);

                newLink.className = 'menu-link';

                newItem.appendChild(newLink);

                menuList.insertBefore(
                    newItem,
                    moreMenu
                );
            }

            item.remove();
        });


        const allMenuItems =
            Array.from(
                menuList.querySelectorAll(
                    '.menu-item:not(.more-menu)'
                )
            );


        // Если пунктов 4 или меньше
        if (allMenuItems.length <= MORE_MENU_INDEX) {
            moreMenu.style.display = 'none';
            moreSubmenu.innerHTML = '';

            return;
        }


        let visibleItems = [];
        let hiddenItems = [];
        let totalWidth = 0;


        allMenuItems.forEach((item, index) => {
            const itemWidth =
                item.offsetWidth;

            const moreWidth =
                hiddenItems.length > 0 ||
                index >= MORE_MENU_INDEX
                    ? moreMenuWidth
                    : 0;


            if (
                totalWidth +
                    itemWidth +
                    (index >= MORE_MENU_INDEX
                        ? moreWidth
                        : 0) >
                availableWidth
            ) {
                hiddenItems.push(item);

            } else if (
                visibleItems.length >=
                MORE_MENU_INDEX
            ) {
                hiddenItems.push(item);

            } else {
                visibleItems.push(item);
                totalWidth += itemWidth;
            }
        });


        // Если элементов больше 4
        if (
            hiddenItems.length === 0 &&
            allMenuItems.length > MORE_MENU_INDEX
        ) {
            hiddenItems =
                allMenuItems.slice(MORE_MENU_INDEX);

            visibleItems =
                allMenuItems.slice(0, MORE_MENU_INDEX);
        }


        // Перемещаем скрытые элементы в "Ещё"
        hiddenItems.forEach(item => {
            item.dataset.originalClass =
                item.className;

            const submenuItem =
                document.createElement('li');

            submenuItem.dataset.originalClass =
                item.className;

            const link =
                item.querySelector('.menu-link');

            if (!link) return;

            const submenuLink =
                link.cloneNode(true);

            submenuLink.className =
                'submenu-link';

            submenuItem.appendChild(submenuLink);

            moreSubmenu.appendChild(submenuItem);

            item.remove();
        });


        // Проверяем, что осталось не больше 4
        const remainingItems =
            menuList.querySelectorAll(
                '.menu-item:not(.more-menu)'
            );

        if (remainingItems.length > MORE_MENU_INDEX) {
            const extraItems =
                Array.from(remainingItems)
                    .slice(MORE_MENU_INDEX);

            extraItems.forEach(item => {
                item.dataset.originalClass =
                    item.className;

                const submenuItem =
                    document.createElement('li');

                submenuItem.dataset.originalClass =
                    item.className;

                const link =
                    item.querySelector('.menu-link');

                if (!link) return;

                const submenuLink =
                    link.cloneNode(true);

                submenuLink.className =
                    'submenu-link';

                submenuItem.appendChild(submenuLink);

                moreSubmenu.appendChild(submenuItem);

                item.remove();
            });
        }


        // Показываем / скрываем "Ещё"
        const hasSubmenuItems =
            moreSubmenu.querySelectorAll('li').length > 0;

        moreMenu.style.display =
            hasSubmenuItems ? '' : 'none';
    }


    // Запуск
    adaptMenu();


    // Пересчёт при изменении ширины
    let resizeTimer;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            adaptMenu();
        }, 100);
    });


    // Закрытие "Ещё" при клике вне хедера
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__top')) {
            moreMenu.classList.remove('active');
        }
    });
});


// ----------------------------------------
// Sticky header
// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const header =
        document.querySelector('.header');

    const headerTop =
        document.querySelector('.header__top');

    const headerBottom =
        document.querySelector('.header__bottom');

    if (!header || !headerTop || !headerBottom) {
        return;
    }

    let headerBottomOffset = null;
    let headerBottomHeight = null;


    const handleScroll = () => {
        if (headerBottomOffset === null) {
            headerBottomOffset =
                headerTop.offsetHeight;

            headerBottomHeight =
                headerBottom.offsetHeight;
        }

        const scrollY = window.scrollY;


        if (scrollY >= headerBottomOffset) {
            header.classList.add(
                'header-scrolled'
            );

            headerBottom.classList.add('fixed');

            document.body.style.paddingTop =
                `${headerBottomHeight}px`;

        } else {
            header.classList.remove(
                'header-scrolled'
            );

            headerBottom.classList.remove('fixed');

            document.body.style.paddingTop = '0';
        }
    };


    window.addEventListener(
        'scroll',
        handleScroll,
        { passive: true }
    );

    // Сразу проверяем положение страницы
    handleScroll();
});



// FOOTER
document.addEventListener('DOMContentLoaded', () => {
    ['footer__catalog', 'footer__menu'].forEach(name => {
        const trigger =
            document.querySelector(
                `.${name}_trigger`
            );

        const subMenu =
            document.querySelector(
                `.${name}_sub`
            );

        trigger?.addEventListener('click', () => {
            trigger.classList.toggle('active');
            subMenu?.classList.toggle('active');
        });
    });
});

// ----------------------------popup----------------------------
document.addEventListener('DOMContentLoaded', function(){
    const popup = document.querySelector('.callback-popup')
    const popupShowBtns = document.querySelectorAll('.show-popup')
    const closeFormBtn = document.querySelector('.close-popup')
    const feedbackForm = document.querySelector('#feedback-popup form')
    const feedbackSuccess = document.querySelector('.feedback-success')
    const successBtn = document.querySelector('.success-btn')

    popupShowBtns.forEach(item => {
        item.addEventListener('click', () => {
            popup.classList.add('active')
            document.body.classList.add('no-scroll')
        })
    })

    closeFormBtn.addEventListener('click', () => {
        // Сначала сбрасываем форму
        feedbackForm.reset()
        // Затем скрываем popup
        popup.classList.remove('active')
        document.body.classList.remove('no-scroll')
        // И только после закрытия возвращаем исходное состояние формы
        setTimeout(() => {
            feedbackForm.style.display = 'block'
            feedbackSuccess.style.display = 'none'
        }, 300) // Задержка, соответствующая времени анимации закрытия попапа
    })

    // Обработчик отправки формы
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault() // Предотвращаем стандартную отправку формы
        
        // Скрываем форму и показываем блок успеха
        feedbackForm.style.display = 'none'
        feedbackSuccess.style.display = 'block'
    })

    // Обработчик кнопки "Хорошо" в блоке успеха
    successBtn.addEventListener('click', () => {
        // Сначала сбрасываем состояние для следующего использования
        feedbackForm.reset() // Очищаем форму
        setTimeout(() => {
            // Затем скрываем popup
            popup.classList.remove('active')
            document.body.classList.remove('no-scroll')
            // И только после этого возвращаем исходное состояние формы
            setTimeout(() => {
                feedbackForm.style.display = 'block'
                feedbackSuccess.style.display = 'none'
            }, 300) // Задержка, соответствующая времени анимации закрытия попапа
        }, 0)
    })

    document.addEventListener('click', (event) => {
        if (event.target === popup) {
            // Сначала сбрасываем форму
            feedbackForm.reset()
            // Затем скрываем popup
            popup.classList.remove('active')
            document.body.classList.remove('no-scroll')
            // И только после закрытия возвращаем исходное состояние формы
            setTimeout(() => {
                feedbackForm.style.display = 'block'
                feedbackSuccess.style.display = 'none'
            }, 300) // Задержка, соответствующая времени анимации закрытия попапа
        }
    });
});
// ----------------------------service-popup----------------------------
document.addEventListener('DOMContentLoaded', function(){
    const servicePopup = document.querySelector('.service-popup')
    const servicePopupShowBtns = document.querySelectorAll('.show-service-popup')
    const serviceCloseFormBtn = document.querySelector('.service-popup .close-popup')
    const serviceForm = document.querySelector('#service-popup form')
    const serviceSuccess = document.querySelector('.service-popup .feedback-success')
    const serviceSuccessBtn = document.querySelector('.service-popup .success-btn')
    
    // Обработчики для открытия service-popup
    servicePopupShowBtns.forEach(item => {
        item.addEventListener('click', () => {
            servicePopup.classList.add('active')
            document.body.classList.add('no-scroll')
        })
    })
    
    // Обработчик закрытия по крестику
    serviceCloseFormBtn.addEventListener('click', () => {
        // Сначала сбрасываем форму
        serviceForm.reset()
        // Затем скрываем popup
        servicePopup.classList.remove('active')
        document.body.classList.remove('no-scroll')
        // И только после закрытия возвращаем исходное состояние формы
        setTimeout(() => {
            serviceForm.style.display = 'block'
            serviceSuccess.style.display = 'none'
        }, 300) // Задержка, соответствующая времени анимации закрытия попапа
    })
    
    // Обработчик отправки формы сервиса
    serviceForm.addEventListener('submit', (event) => {
        event.preventDefault() // Предотвращаем стандартную отправку формы
        
        // Скрываем форму и показываем блок успеха
        serviceForm.style.display = 'none'
        serviceSuccess.style.display = 'block'
    })
    
    // Обработчик кнопки "Хорошо" в блоке успеха сервиса
    serviceSuccessBtn.addEventListener('click', () => {
        // Сначала сбрасываем состояние для следующего использования
        serviceForm.reset() // Очищаем форму
        setTimeout(() => {
            // Затем скрываем popup
            servicePopup.classList.remove('active')
            document.body.classList.remove('no-scroll')
            // И только после этого возвращаем исходное состояние формы
            setTimeout(() => {
                serviceForm.style.display = 'block'
                serviceSuccess.style.display = 'none'
            }, 300) // Задержка, соответствующая времени анимации закрытия попапа
        }, 0)
    })
    
    // Закрытие по клику вне формы
    document.addEventListener('click', (event) => {
        if (event.target === servicePopup) {
            // Сначала сбрасываем форму
            serviceForm.reset()
            // Затем скрываем popup
            servicePopup.classList.remove('active')
            document.body.classList.remove('no-scroll')
            // И только после закрытия возвращаем исходное состояние формы
            setTimeout(() => {
                serviceForm.style.display = 'block'
                serviceSuccess.style.display = 'none'
            }, 300) // Задержка, соответствующая времени анимации закрытия попапа
        }
    });
});

const accordion = document.querySelector('.feedback-accordion');
const header = accordion.querySelector('.feedback-accordion_header');
const content = accordion.querySelector('.feedback-accordion_items');
const mobileBtn = document.querySelector('.feedback-accordion_mobile');
const closeBtn = document.querySelector('.feedback-accordion_close');

header.addEventListener('click', (e) => {
    if (e.target.closest('.feedback-accordion_close')) return;

    if (!accordion.classList.contains('is-active')) {
        openAccordion();
    }
});

function openAccordion() {
    accordion.classList.add('is-active');
    content.style.maxHeight = content.scrollHeight + 'px';
}

function closeAccordion() {
    accordion.classList.remove('is-active');
    content.style.maxHeight = null;
}

mobileBtn?.addEventListener('click', () => {
    accordion.classList.add('is-visible');
    mobileBtn.classList.add('hidden');

    openAccordion();
});

closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();

    closeAccordion();
    accordion.classList.remove('is-visible');
    mobileBtn.classList.remove('hidden');
});

window.addEventListener('resize', () => {
    if (accordion.classList.contains('is-active')) {
        content.style.maxHeight = null;

        requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const datetimeInput = document.getElementById('datetime-input');
    const datetimePicker = document.getElementById('datetime-picker');
    const calendarDays = document.getElementById('calendar-days');
    const pickerTitle = document.querySelector('.datetime-picker__title');
    const prevBtn = document.querySelector('.datetime-picker__prev');
    const nextBtn = document.querySelector('.datetime-picker__next');
    const timeInput = document.getElementById('time-input');
    const applyBtn = document.querySelector('.datetime-picker__apply');
    const hiddenInput = document.getElementById('selected-datetime');
    const closeDatetime = document.querySelector('.close-datetime');

    closeDatetime.addEventListener('click', () => {
        datetimePicker.style.display = 'none';
    })

    if (!datetimeInput || !datetimePicker) return;

    let currentDate = new Date();
    let selectedDate = null;

    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    datetimeInput.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = datetimePicker.style.display === 'block';
        if (isVisible) {
            datetimePicker.style.display = 'none';
        } else {
            datetimePicker.style.display = 'block';
            setTimeout(() => {
                renderCalendar();
            }, 10);
        }
    });

    document.addEventListener('click', (e) => {
        if (!datetimePicker.contains(e.target) && e.target !== datetimeInput) {
            datetimePicker.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    applyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (selectedDate) {
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const year = selectedDate.getFullYear();
            const time = timeInput.value;

            const formattedDate = `${day}.${month}.${year} в ${time}`;
            datetimeInput.value = formattedDate;
            hiddenInput.value = `${year}-${month}-${day}T${time}`;

            datetimePicker.style.display = 'none';
        }
    });

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        pickerTitle.textContent = `${monthNames[month]}, ${year}`;

        calendarDays.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);

        let firstDayIndex = firstDay.getDay();
        firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

        const daysInMonth = lastDay.getDate();
       
        const prevDaysInMonth = prevLastDay.getDate();

        const today = new Date();
        today.setHours(0, 0, 0, 0);

     
        for (let i = firstDayIndex; i > 0; i--) {
            const dayBtn = createDayButton(
                prevDaysInMonth - i + 1,
                new Date(year, month - 1, prevDaysInMonth - i + 1),
                'other-month'
            );
            calendarDays.appendChild(dayBtn);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            let className = '';

            const dayOfWeek = date.getDay();
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                className = 'weekend';
            }

            if (date.getTime() === today.getTime()) {
                className += ' today';
            }

       
            if (selectedDate && date.getTime() === selectedDate.getTime()) {
                className += ' selected';
            }

   
            if (date < today) {
                className += ' disabled';
            }

            const dayBtn = createDayButton(day, date, className.trim());
            calendarDays.appendChild(dayBtn);
        }

        const totalCells = calendarDays.children.length;
        const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

        for (let day = 1; day <= remainingCells; day++) {
            const dayBtn = createDayButton(
                day,
                new Date(year, month + 1, day),
                'other-month'
            );
            calendarDays.appendChild(dayBtn);
        }
    }

 
    function createDayButton(day, date, className) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `datetime-picker__day ${className}`;
        btn.textContent = String(day).padStart(2, '0');

        if (!className.includes('disabled')) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                selectDate(date);
            });
        }

        return btn;
    }


    function selectDate(date) {
        selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);
        renderCalendar();
    }

    const timePickerDropdown = document.getElementById('time-picker-dropdown');
    const hoursColumn = document.getElementById('hours-column');
    const minutesColumn = document.getElementById('minutes-column');

    if (timeInput && timePickerDropdown) {
        let selectedHour = 0;
        let selectedMinute = 0;
        let scrollTimeout;
        let isScrolling = false;

        const hoursScroll = hoursColumn.querySelector('.time-picker-scroll');
        for (let i = 0; i < 24; i++) {
            const item = document.createElement('div');
            item.className = 'time-picker-item';
            item.textContent = String(i).padStart(2, '0');
            item.dataset.value = i;
            if (i === 0) item.classList.add('selected');

            item.addEventListener('click', () => {
                selectedHour = i;
                updateTimeDisplay();
                highlightSelected(hoursScroll, item);
                scrollToCenter(hoursScroll, item);
            });

            hoursScroll.appendChild(item);
        }

    
        const minutesScroll = minutesColumn.querySelector('.time-picker-scroll');
        for (let i = 0; i < 60; i++) {
            const item = document.createElement('div');
            item.className = 'time-picker-item';
            item.textContent = String(i).padStart(2, '0');
            item.dataset.value = i;
            if (i === 0) item.classList.add('selected');

            item.addEventListener('click', () => {
                selectedMinute = i;
                updateTimeDisplay();
                highlightSelected(minutesScroll, item);
                scrollToCenter(minutesScroll, item);
            });

            minutesScroll.appendChild(item);
        }

        timeInput.addEventListener('click', (e) => {
            e.stopPropagation();
            const isVisible = timePickerDropdown.style.display === 'block';
            timePickerDropdown.style.display = isVisible ? 'none' : 'block';
        });

     
        document.addEventListener('click', (e) => {
            if (!timePickerDropdown.contains(e.target) && e.target !== timeInput) {
                timePickerDropdown.style.display = 'none';
            }
        });

 
        function updateTimeDisplay() {
            const timeString = `${String(selectedHour).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')}`;
            timeInput.value = timeString;
            document.getElementById('time-value').value = timeString;
        }

    
        function highlightSelected(container, selectedItem) {
            container.querySelectorAll('.time-picker-item').forEach(item => {
                item.classList.remove('selected');
            });
            selectedItem.classList.add('selected');
        }


        function scrollToCenter(container, item) {
            isScrolling = true;

   
            const index = parseInt(item.dataset.value);
            const itemHeight = 40;
            const padding = 80;

          
            const scrollTo = (index * itemHeight);

            container.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });

        
            setTimeout(() => {
                isScrolling = false;
            }, 300);
        }

        function handleScroll(container) {
            if (isScrolling) return;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateSelectedFromScroll(container);
            }, 100);
        }

        function updateSelectedFromScroll(container) {
            const scrollTop = container.scrollTop;
            const itemHeight = 40;

          
            const centerIndex = Math.round(scrollTop / itemHeight);

            const items = container.querySelectorAll('.time-picker-item');
            const closestItem = items[centerIndex];

            if (closestItem) {
          
                const targetScroll = centerIndex * itemHeight;
                if (Math.abs(scrollTop - targetScroll) > 2) {
                    isScrolling = true;
                    container.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth'
                    });
                    setTimeout(() => {
                        isScrolling = false;
                    }, 300);
                }

                highlightSelected(container, closestItem);

           
                const value = parseInt(closestItem.dataset.value);
                if (container === hoursScroll) {
                    selectedHour = value;
                } else {
                    selectedMinute = value;
                }
                updateTimeDisplay();
            }
        }


        function handleWheel(e, container) {
            e.preventDefault();

        
            const delta = e.deltaY / 3;

            container.scrollTop += delta;
        }

    
        hoursScroll.addEventListener('scroll', () => handleScroll(hoursScroll));
        minutesScroll.addEventListener('scroll', () => handleScroll(minutesScroll));

        hoursScroll.addEventListener('wheel', (e) => handleWheel(e, hoursScroll), { passive: false });
        minutesScroll.addEventListener('wheel', (e) => handleWheel(e, minutesScroll), { passive: false });

    
        setTimeout(() => {
            const firstHour = hoursScroll.querySelector('.time-picker-item');
            const firstMinute = minutesScroll.querySelector('.time-picker-item');
            if (firstHour) scrollToCenter(hoursScroll, firstHour);
            if (firstMinute) scrollToCenter(minutesScroll, firstMinute);
        }, 100);
    }

    renderCalendar();
});

// ----------------------------------search-autocomplete----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    const searchClear = document.getElementById('search-clear');
    const autocompleteContainer = document.getElementById('search-autocomplete');
    const autocompleteList = autocompleteContainer?.querySelector('.search-autocomplete__list');

    if (!searchInput || !autocompleteContainer || !autocompleteList || !searchClear) return;

    const searchData = [
        { 
            id: 1, 
            title: 'Вакуумный упаковщик DZ-400/2T', 
            category: 'Упаковочное оборудование',
            price: '45 000',
            image: '/public/images/product2.png'
        },
        { 
            id: 2, 
            title: 'Вакуумный упаковщик DZ-500/2E', 
            category: 'Упаковочное оборудование',
            price: '52 500',
            image: '/public/images/product2.png'
        },
        { 
            id: 3, 
            title: 'Горизонтальная упаковочная машина HL-450', 
            category: 'Упаковочное оборудование',
            price: '78 900',
            image: '/public/images/product2.png'
        },
        { 
            id: 4, 
            title: 'Запайщик пакетов FRD-1000', 
            category: 'Упаковочное оборудование',
            price: '23 700',
            image: '/public/images/product2.png'
        },
        { 
            id: 5, 
            title: 'Мясорубка промышленная MG-32', 
            category: 'Мясопереработка',
            price: '34 800',
            image: '/public/images/product2.png'
        },
    ];

    let selectedIndex = -1;
    let currentResults = [];

    function searchItems(query) {
        if (!query || query.length < 2) {
            return [];
        }

        const normalizedQuery = query.toLowerCase().trim();

        return searchData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
            const categoryMatch = item.category.toLowerCase().includes(normalizedQuery);

            return titleMatch || categoryMatch;
        });
    }

    function highlightMatch(text, query) {
        if (!query) return text;

        const normalizedQuery = query.trim();
        const regex = new RegExp(`(${normalizedQuery})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function displayResults(results, query) {
        autocompleteList.innerHTML = '';

        if (results.length === 0) {
            autocompleteList.innerHTML = '<div class="search-autocomplete__empty">Ничего не найдено</div>';
            autocompleteContainer.classList.add('active');
            return;
        }

        results.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'search-autocomplete__item';
            itemElement.dataset.index = index;
            itemElement.dataset.itemId = item.id;

            itemElement.innerHTML = `
                <div class="search-autocomplete__item-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">
                </div>
                <div class="search-autocomplete__item-content">
                    <div class="search-autocomplete__item-title">${highlightMatch(item.title, query)}</div>
                    <div class="search-autocomplete__item-price">${item.price} <span class="currency">₽</span></div>
                </div>
            `;

            itemElement.addEventListener('click', () => {
                selectItem(item);
            });

            autocompleteList.appendChild(itemElement);
        });

        autocompleteContainer.classList.add('active');
    }

    function selectItem(item) {
        searchInput.value = item.title;
        hideAutocomplete();
        console.log('Выбран товар:', item);
    }

    function hideAutocomplete() {
        autocompleteContainer.classList.remove('active');
        selectedIndex = -1;
        currentResults = [];
    }

    function toggleClearButton() {
        if (searchInput.value.length > 0) {
            searchClear.style.display = 'flex';
        } else {
            searchClear.style.display = 'none';
        }
    }

    function clearSearch() {
        searchInput.value = '';
        searchInput.focus();
        hideAutocomplete();
        toggleClearButton();
    }

    function updateSelectedItem() {
        const items = autocompleteList.querySelectorAll('.search-autocomplete__item');
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        clearTimeout(searchTimeout);
        toggleClearButton();

        if (!query || query.length < 2) {
            hideAutocomplete();
            return;
        }

        searchTimeout = setTimeout(() => {
            currentResults = searchItems(query);
            displayResults(currentResults, query);
            selectedIndex = -1;
        }, 300);
    });

    searchClear.addEventListener('click', (e) => {
        e.preventDefault();
        clearSearch();
    });

    searchInput.addEventListener('keydown', (e) => {
        const items = autocompleteList.querySelectorAll('.search-autocomplete__item');

        if (!autocompleteContainer.classList.contains('active') || items.length === 0) {
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                updateSelectedItem();
                break;

            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, -1);
                updateSelectedItem();
                break;

            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
                    selectItem(currentResults[selectedIndex]);
                } else if (currentResults.length > 0) {
                    selectItem(currentResults[0]);
                }
                break;

            case 'Escape':
                e.preventDefault();
                hideAutocomplete();
                break;
        }
    });

    searchInput.addEventListener('focus', () => {
        toggleClearButton();
        if (searchInput.value.length >= 2 && currentResults.length > 0) {
            autocompleteContainer.classList.add('active');
        }
    });

    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            if (searchInput.value.length === 0) {
                searchClear.style.display = 'none';
            }
        }, 150);
    });

    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target)) {
            hideAutocomplete();
        }
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
            selectItem(currentResults[selectedIndex]);
        } else if (currentResults.length > 0) {
            selectItem(currentResults[0]);
        } else if (searchInput.value) {
            console.log('Поиск по запросу:', searchInput.value);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const headerSearchWrapper = document.querySelector('.header__search_wrapper');
    const searchClose = document.querySelector('.search-close');

    searchBtn.addEventListener('click', () => {
        headerSearchWrapper.classList.toggle('active');
    });

    searchClose.addEventListener('click', () => {
        headerSearchWrapper.classList.remove('active');
    });
})


document.addEventListener('DOMContentLoaded', () => {
const productsSlider = new Swiper('.products__list', {
  loop: true,
spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 2,
        spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1320: {
      slidesPerView: 3,
    },
    1700: {
      slidesPerView: 4,
    },
  },
});
})

document.addEventListener('DOMContentLoaded', () => {
const solutionsSlider = new Swiper('.solutions__list', {
  slidesPerView: 4,
  spaceBetween: 32,
//   loop: true,

    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2.3,
    },
    1320: {
      slidesPerView: 3,
    },
    1700: {
      slidesPerView: 4,
    },
  },
});
})