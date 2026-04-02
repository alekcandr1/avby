const ads = [
    {
        id: 1,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524674',
        article: '1020',
        submitDate: '04 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'active',
        views: '283',
        phoneViews: '7',
        image: 'assets/items/item1.jpg',
        imageAlt: 'Телевизор Blaupunkt 50 50UJW5000T',
        noPhoto: false
    },
    {
        id: 2,
        title: 'Телевизор JVC 50" LT-50MU7500',
        articleNumber: '100524676',
        article: '1020',
        submitDate: '06 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'active',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/images/without-photo.svg',
        imageAlt: 'Без фото',
        noPhoto: true
    },
    {
        id: 3,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524675',
        article: '1020',
        submitDate: '05 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'stop',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/items/item2.jpg',
        imageAlt: 'Телевизор JVC 50 LT-50MU7500',
        noPhoto: false
    },
    {
        id: 4,
        title: 'Телевизор JVC 50" LT-50MU7500',
        articleNumber: '100524676',
        article: '2N20433/442IWKs',
        submitDate: '06 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'active',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/images/without-photo.svg',
        imageAlt: 'Без фото',
        noPhoto: true
    },
    {
        id: 5,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524674',
        article: '1020',
        submitDate: '04 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'pause',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/items/item1.jpg',
        imageAlt: 'Телевизор Blaupunkt 50 50UJW5000T',
        noPhoto: false
    },
    {
        id: 6,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524675',
        article: '1020',
        submitDate: '05 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'pause',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/items/item2.jpg',
        imageAlt: 'Телевизор JVC 50 LT-50MU7500',
        noPhoto: false
    },
    {
        id: 7,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524674',
        article: '1020',
        submitDate: '04 сен 2021',
        condition: 'новый',
        priceMain: '9 400 BYN',
        priceSecondary: '2 322 USD',
        status: 'pause',
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/items/item1.jpg',
        imageAlt: 'Телевизор Blaupunkt 50 50UJW5000T',
        noPhoto: false
    }
];

const adsTableBody = document.getElementById('ads-table-body');
const adsCount = document.getElementById('ads-count');
const adRowTemplate = document.getElementById('ad-row-template');
const bulkActions = document.getElementById('bulk-actions');
const bulkActionsLabel = document.getElementById('bulk-actions-label');
const openAddModalButton = document.getElementById('open-add-modal');
const addModalOverlay = document.getElementById('add-modal-overlay');
const closeAddModalButton = document.getElementById('close-add-modal');
const addModalSaveButton = document.getElementById('add-modal-save');
const addModalTitleInput = document.getElementById('add-modal-title-input');
const addModalDescriptionInput = document.getElementById('add-modal-description-input');
const addModalTitleError = document.getElementById('add-modal-title-error');
const addModalDescriptionError = document.getElementById('add-modal-description-error');
const addModalRatingError = document.getElementById('add-modal-rating-error');
const addModalStars = document.getElementById('add-modal-stars');
const selectedAdIds = new Set();
let addModalRating = 0;

function getStatusClass(status) {
    if (status === 'pause') return 'status-icon_pause';
    if (status === 'stop') return 'status-icon_stop';
    return 'status-icon_active';
}

function renderAds() {
    adsTableBody.innerHTML = '';

    ads.forEach((ad) => {
        const row = adRowTemplate.content.firstElementChild.cloneNode(true);
        const photoWrap = row.querySelector('.js-photo-wrap');
        const photo = row.querySelector('.js-photo');
        const title = row.querySelector('.js-title');
        const articleNumber = row.querySelector('.js-article-number');
        const article = row.querySelector('.js-article');
        const submitDate = row.querySelector('.js-submit-date');
        const condition = row.querySelector('.js-condition');
        const priceMain = row.querySelector('.js-price-main');
        const priceSecondary = row.querySelector('.js-price-secondary');
        const statusIcon = row.querySelector('.js-status-icon');
        const views = row.querySelector('.js-views');
        const phoneViews = row.querySelector('.js-phone-views');
        const toggleStatusLabel = row.querySelector('.js-toggle-status-label');
        const checkbox = row.querySelector('.catalog-table__checkbox');

        row.dataset.id = ad.id;
        if (ad.status === 'stop') {
            row.classList.add('catalog-table__row_stop');
        }
        photo.src = ad.image;
        photo.alt = ad.imageAlt;
        title.textContent = ad.title;
        articleNumber.textContent = `№ ${ad.articleNumber}`;
        article.textContent = ad.article;
        submitDate.textContent = ad.submitDate;
        condition.textContent = ad.condition;
        priceMain.textContent = ad.priceMain;
        priceSecondary.textContent = ad.priceSecondary;
        statusIcon.classList.add(getStatusClass(ad.status));
        views.textContent = ad.views;
        phoneViews.textContent = ad.phoneViews;
        toggleStatusLabel.textContent = ad.status === 'active' ? 'На паузу' : 'Активировать';
        checkbox.checked = selectedAdIds.has(ad.id);

        if (ad.noPhoto) {
            photoWrap.classList.add('product__photo_no-image');
        }

        adsTableBody.appendChild(row);
    });

    adsCount.textContent = `${ads.length} объявлений`;
    updateBulkActionsState();
}

function setAdStatus(id, status) {
    const ad = ads.find((item) => item.id === id);
    if (!ad) return;
    ad.status = status;
    renderAds();
}

function closeAllMenus() {
    document.querySelectorAll('.row-menu_open').forEach((menu) => {
        menu.classList.remove('row-menu_open');
    });
}

function updateBulkActionsState() {
    const hasSelected = selectedAdIds.size > 0;
    bulkActions.classList.toggle('bulk-actions_active', hasSelected);

    if (!hasSelected) {
        bulkActionsLabel.textContent = 'Выберите объявления';
        return;
    }

    bulkActionsLabel.textContent = `Выбрано ${selectedAdIds.size} на странице:`;
}

function applyBulkAction(action) {
    if (selectedAdIds.size === 0) return;

    ads.forEach((ad) => {
        if (!selectedAdIds.has(ad.id)) return;

        if (action === 'publish') ad.status = 'active';
        if (action === 'pause') ad.status = 'pause';
        if (action === 'delete') ad.status = 'stop';
    });

    selectedAdIds.clear();
    renderAds();
}

function handleTableClick(event) {
    const actionButton = event.target.closest('.table-actions');
    if (actionButton) {
        event.stopPropagation();
        const row = actionButton.closest('tr');
        const menu = row.querySelector('.row-menu');
        const isOpen = menu.classList.contains('row-menu_open');

        closeAllMenus();

        if (!isOpen) {
            menu.classList.add('row-menu_open');
        }
        return;
    }

    const menuAction = event.target.closest('.row-menu__action');
    if (!menuAction) return;
    event.stopPropagation();

    const row = menuAction.closest('tr');
    const id = Number(row.dataset.id);
    const action = menuAction.dataset.action;

    if (action === 'pause') {
        const ad = ads.find((item) => item.id === id);
        if (!ad) return;
        const nextStatus = ad.status === 'active' ? 'pause' : 'active';
        setAdStatus(id, nextStatus);
    }

    if (action === 'delete') {
        setAdStatus(id, 'stop');
    }

    closeAllMenus();
}

function handleTableChange(event) {
    const checkbox = event.target.closest('.catalog-table__checkbox');
    if (!checkbox) return;

    const row = checkbox.closest('tr');
    const id = Number(row.dataset.id);
    if (!id) return;

    if (checkbox.checked) {
        selectedAdIds.add(id);
    } else {
        selectedAdIds.delete(id);
    }

    updateBulkActionsState();
}

function handleBulkActionsClick(event) {
    const actionButton = event.target.closest('[data-bulk-action]');
    if (!actionButton) return;
    applyBulkAction(actionButton.dataset.bulkAction);
}

function updateAddModalStars(hoverValue = 0) {
    const stars = addModalStars.querySelectorAll('.add-modal__star');

    stars.forEach((star) => {
        const value = Number(star.dataset.star);
        star.classList.remove('add-modal__star_hover', 'add-modal__star_active');

        if (hoverValue && value <= hoverValue) {
            star.classList.add('add-modal__star_hover');
            return;
        }

        if (value <= addModalRating) {
            star.classList.add('add-modal__star_active');
        }
    });
}

function openAddModal() {
    addModalOverlay.classList.add('add-modal-overlay_open');
}

function closeAddModal() {
    addModalOverlay.classList.remove('add-modal-overlay_open');
    addModalTitleInput.value = '';
    addModalDescriptionInput.value = '';
    addModalRating = 0;
    updateAddModalStars(0);
    clearAddModalValidation();
}

function handleAddModalStars(event) {
    const star = event.target.closest('.add-modal__star');
    if (!star) return;
    addModalRating = Number(star.dataset.star);
    updateAddModalStars(0);
    showValidationError(addModalRatingError, false);
}

function handleAddModalStarsHover(event) {
    const star = event.target.closest('.add-modal__star');
    if (!star) return;
    updateAddModalStars(Number(star.dataset.star));
}

function handleAddModalStarsLeave() {
    updateAddModalStars(0);
}

function handleOverlayClick(event) {
    if (event.target === addModalOverlay) {
        closeAddModal();
    }
}

function handleEscClose(event) {
    if (event.key === 'Escape') {
        closeAddModal();
    }
}

function showValidationError(element, isVisible) {
    element.classList.toggle('add-modal__error_visible', isVisible);
}

function clearAddModalValidation() {
    showValidationError(addModalTitleError, false);
    showValidationError(addModalDescriptionError, false);
    showValidationError(addModalRatingError, false);
}

function validateAddModal() {
    const hasTitleError = addModalTitleInput.value.trim().length === 0;
    const hasDescriptionError = addModalDescriptionInput.value.trim().length === 0;
    const hasRatingError = addModalRating === 0;

    showValidationError(addModalTitleError, hasTitleError);
    showValidationError(addModalDescriptionError, hasDescriptionError);
    showValidationError(addModalRatingError, hasRatingError);

    return !(hasTitleError || hasDescriptionError || hasRatingError);
}

function handleAddModalSave() {
    if (!validateAddModal()) return;
    closeAddModal();
}

window.adsStore = {
    ads,
    renderAds,
    setAdStatus
};

adsTableBody.addEventListener('click', handleTableClick);
adsTableBody.addEventListener('change', handleTableChange);
bulkActions.addEventListener('click', handleBulkActionsClick);
openAddModalButton.addEventListener('click', (event) => {
    event.preventDefault();
    openAddModal();
});
closeAddModalButton.addEventListener('click', closeAddModal);
addModalSaveButton.addEventListener('click', handleAddModalSave);
addModalOverlay.addEventListener('click', handleOverlayClick);
addModalStars.addEventListener('click', handleAddModalStars);
addModalStars.addEventListener('mouseover', handleAddModalStarsHover);
addModalStars.addEventListener('mouseleave', handleAddModalStarsLeave);
addModalTitleInput.addEventListener('input', () => showValidationError(addModalTitleError, false));
addModalDescriptionInput.addEventListener('input', () => showValidationError(addModalDescriptionError, false));
document.addEventListener('keydown', handleEscClose);
document.addEventListener('click', closeAllMenus);

renderAds();
