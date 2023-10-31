// apiService.js
const apiUrl = "https://api.spacexdata.com/v3/launches";

export const fetchData = async () => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Error in data");
    }
    const data = await response.json();
    console.log(data);
    return data;
};

