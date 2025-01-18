function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data Fetched! Student name: Lao Rana'), 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Student Name: Lao Rana');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed = 'Processing Data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
