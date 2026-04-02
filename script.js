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
        views: '910 283',
        phoneViews: '5 987',
        image: 'assets/items/item1.jpg',
        imageAlt: 'Телевизор Blaupunkt 50 50UJW5000T'
    },
    {
        id: 2,
        title: 'Телевизор JVC 50" LT-50MU7500',
        articleNumber: '100524675',
        article: '1021',
        submitDate: '05 сен 2021',
        condition: 'новый',
        priceMain: '9 300 BYN',
        priceSecondary: '2 297 USD',
        status: 'pause',
        views: '845 120',
        phoneViews: '4 203',
        image: 'assets/items/item2.jpg',
        imageAlt: 'Телевизор JVC 50 LT-50MU7500'
    },
    {
        id: 3,
        title: 'Телевизор Blaupunkt 50" 50UJW5000T',
        articleNumber: '100524676',
        article: '1022',
        submitDate: '06 сен 2021',
        condition: 'б/у',
        priceMain: '8 900 BYN',
        priceSecondary: '2 198 USD',
        status: 'stop',
        views: '513 002',
        phoneViews: '2 611',
        image: 'assets/images/without-photo.svg',
        imageAlt: 'Без фото',
        noPhoto: true
    }
];

const adsTableBody = document.getElementById('ads-table-body');
const adsCount = document.getElementById('ads-count');

function getStatusIconClass(status) {
    if (status === 'pause') return 'status-icon_pause';
    if (status === 'stop') return 'status-icon_stop';
    return 'status-icon_active';
}

function renderAds() {
    adsTableBody.innerHTML = ads
        .map((ad) => {
            const noPhotoClass = ad.noPhoto ? ' product__photo_no-image' : '';
            const statusIconClass = getStatusIconClass(ad.status);

            return `
                <tr data-id="${ad.id}">
                    <td class="catalog-table__checkbox-cell">
                        <input class="catalog-table__checkbox" type="checkbox" />
                    </td>
                    <td>
                        <label class="product">
                            <span class="product__photo${noPhotoClass}">
                                <img src="${ad.image}" alt="${ad.imageAlt}" />
                            </span>
                            <span class="product__text">
                                <span class="product__name">${ad.title}</span>
                                <span class="product__meta">№ ${ad.articleNumber}</span>
                            </span>
                        </label>
                    </td>
                    <td>${ad.article}</td>
                    <td>${ad.submitDate}</td>
                    <td>${ad.condition}</td>
                    <td>
                        <p class="price">${ad.priceMain}</p>
                        <p class="price__secondary">${ad.priceSecondary}</p>
                    </td>
                    <td>
                        <span class="status-icon ${statusIconClass}"></span>
                    </td>
                    <td>
                        <div class="metric">
                            <img class="metric__icon" src="assets/icons/eye-open.svg" alt="" />
                            <span class="metric__value">${ad.views}</span>
                        </div>
                    </td>
                    <td>
                        <div class="metric">
                            <img class="metric__icon" src="assets/icons/phone.svg" alt="" />
                            <span class="metric__value">${ad.phoneViews}</span>
                        </div>
                    </td>
                    <td>
                        <button class="table-actions" type="button">
                            <img src="assets/icons/kebab.svg" alt="Действия" />
                        </button>
                    </td>
                </tr>
            `;
        })
        .join('');

    adsCount.textContent = `${ads.length} объявлений`;
}

function setAdStatus(id, status) {
    const ad = ads.find((item) => item.id === id);
    if (!ad) return;
    ad.status = status;
    renderAds();
}

function removeAd(id) {
    const index = ads.findIndex((item) => item.id === id);
    if (index === -1) return;
    ads.splice(index, 1);
    renderAds();
}

window.adsStore = {
    ads,
    renderAds,
    setAdStatus,
    removeAd
};

renderAds();
