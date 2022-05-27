export default class ColumnChart {
    chartHeight = 50;
    constructor({
            data = [],
            label = '',
            value = 0,
            link = '',
            formatHeading = data => data
        } = {}) {
        this.data = data;
        this.label = label;
        this.value = value;
        this.link = link;
        this.formatHeading = formatHeading;
        this.render();
        this.initEventListeners();
    }

    getTemplate() {
        return `
        <div class="column-chart column-chart_loading" style="--chart-height: 50">
            <div class="column-chart__title">
            Total ${this.label} 
            ${this.getLink()}
            </div>
            <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
                <div data-element="body" class="column-chart__chart">
                ${this.getChartBody(this.data)}
                </div>
            </div>
        </div>
        `;
    }

    render() {
        const element = document.createElement("div"); //(*)

        element.innerHTML = this.getTemplate();

        this.element = element.firstElementChild;
        if (this.data.length) {
            this.element.classList.remove('column-chart_loading');
        }
        this.subElements = this.getSubElements(this.element);
        
    }

    getLink() {
        return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : ''
    }

    getChartBody(data){
        let body = '';
        const maxValue = Math.max(...data);
        const scale = this.chartHeight / maxValue;
        for(let col of data){
            let percent = (col / maxValue * 100).toFixed(0);
            body += `<div style="--value:${Math.floor(col*scale)}" data-tooltip="${percent}%"></div>`
        }
        return body;
    }

    update(data) {
        this.subElements.body.innerHTML = this.getChartBody(data);
    }

    getSubElements(element) {
        const elements = element.querySelectorAll('[data-element]');

        return [...elements].reduce((accum, subElement) => {
            accum[subElement.dataset.element] = subElement;
            return accum;
        }, {});
    }

    initEventListeners() {
        //NOTE: в данном методе добавляем обработчики событий, если они есть
    }

    remove() {
        this.element.remove();
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = {};
    }
}

// const defaultComponent = new DefaultComponent();
// const element = document.getElementById("root");

// element.append(defaultComponent.element);
