const multiplicationChart = document.getElementById('multiplicationChart');

const ary = nineMultiplyNine([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const tempAry = ary.slice();

let HTML = `
            <div class="multiplicationChart__title multiplicationChart__col">
                <div class="multiplicationChart__title__header">
                    <div class="line"></div>
                </div>
                <div class="multiplicationChart__title__body">
                    <h1>九九乘法表</h1>
                    <h2>MULTIPLICATION CHART</h2>
                </div>
                <div class="multiplicationChart__title__footer">
                    <div class="line"></div>
                </div>
            </div>
            `;

for (let i = 2; i <= 9; i += 1) {
    HTML += `
        <div class="multiplicationChart__content multiplicationChart__col">
            <div class="multiplicationChart__content__left">
                <div class="topic">${i}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div>${tempAry.shift()}</div>
            </div>
            <div class="multiplicationChart__content__right">
                <div class="mb-1">${tempAry.shift()}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div class="mb-1">${tempAry.shift()}</div>
                <div>${tempAry.shift()}</div>
            </div>
        </div>
    `;
}

multiplicationChart.innerHTML = HTML;

function nineMultiplyNine(arr) {
    let str = '';
    arr.forEach((initial) => {
        if (initial === 1) { return; }
        arr.reduce((acc, cur) => {
            str += `${acc} x ${cur} = ${acc * cur},`;
            return initial;
        }, initial);
    });
    const newArray = str.split(',');
    newArray.pop();
    return newArray;
}
