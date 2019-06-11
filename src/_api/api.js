export async function fetchSearchResults() {
    const url = 'https://localhost:2222';

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
}

const options = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
]

export async function fetchDataMock(value) {
    const response = await Promise.resolve({
      json: () =>
        Promise.resolve(options.filter(option => option.includes(value)))
    });

    return response.json();
}