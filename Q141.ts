// Question141:Discuss the significance of the await reserved word in asynchronous JavaScript.
async function fetchData(url:any) {
        const response = await fetch(url); // Await the Promise returned by fetch
        const data = await response.json(); // Await the Promise returned by response.json()
        return data;
    } 
        console.error("Error fetching data:", Error);
        throw Error; // Propagate the error if needed


// Example usage
fetchData("https://github.com/Asmairfan202023/Day46");
