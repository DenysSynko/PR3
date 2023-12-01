function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letterToCount) {
    const countFirstRow = countLetter(firstRow, letterToCount);
    const countSecondRow = countLetter(secondRow, letterToCount);

    const result = document.getElementById('result');

    if (countFirstRow > countSecondRow) {
        result.textContent = firstRow;
    } else {
        result.textContent = secondRow;
    }
}

function Phone(phone) {
    const formatted = `+7 (${phone.substring(2, 5)}) ${phone.substring(5, 8)}-${phone.substring(8, 10)}-${phone.substring(10)}`;
    return formatted;
}

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const letterToCount = prompt('Введіть літеру для підрахунку:', 'а');

getRow(firstRow, secondRow, letterToCount);

const phoneNumber = '+71234567890';
const PhoneResult = Phone(phoneNumber);
document.getElementById('phone').textContent = PhoneResult;