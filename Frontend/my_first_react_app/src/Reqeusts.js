// Function to fetch data from the server using a GET request
export async function getData(url) {
    try {
        const token = localStorage.getItem('accessToken'); // Get access token from local storage
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include authorization token in the request headers
                'Accept': '*/*', // Add Accept header
                'Access-Control-Allow-Origin':'*', // Add Access-Control-Allow-Origin header
                'Host': window.location.host // Add Host header
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Return JSON response
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
    }
    return null; // Return null in case of error
}

// Function to send data to the server using a POST request
export async function postData(url, data) {
    try {
        const token = localStorage.getItem('accessToken'); // Get access token from local storage
        let response;
        if (data) {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include authorization token in the request headers
                    'Accept': '*/*', // Add Accept header
                    'Access-Control-Allow-Origin':'*', // Add Access-Control-Allow-Origin header
                    'Host': window.location.host // Add Host header
                },
                body: JSON.stringify(data) // Convert data to JSON string
            });
        } else {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include authorization token in the request headers
                    'Accept': '*/*', // Add Accept header
                    'Access-Control-Allow-Origin':'*', // Add Access-Control-Allow-Origin header
                    'Host': window.location.host // Add Host header
                }
            });
        }
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text(); // Get text response
        console.log('POST request successful:', result);
        return result; // Return text response
    } catch (error) {
        console.error('Error during POST request:', error);
    }
    return null; // Return null in case of error
}

// Function to send data to the server using a PUT request
export async function putData(url, data) {
    try {
        const token = localStorage.getItem('accessToken'); // Get access token from local storage
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include authorization token in the request headers
                'Accept': '*/*', // Add Accept header
                'Access-Control-Allow-Origin':'*', // Add Access-Control-Allow-Origin header
                'Host': window.location.host // Add Host header
            },
            body: JSON.stringify(data), // Convert data to JSON string
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text(); // Get text response
        console.log('PUT request successful:', result);
        return result; // Return text response
    } catch (error) {
        console.error('Error during PUT request:', error);
    }
    return null; // Return null in case of error
}

// Function to send a DELETE request to the server
export async function deleteData(url) {
    try {
        const token = localStorage.getItem('accessToken'); // Get access token from local storage
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include authorization token in the request headers
                'Accept': '*/*', // Add Accept header
                'Access-Control-Allow-Origin':'*', // Add Access-Control-Allow-Origin header
                'Host': window.location.host // Add Host header
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text(); // Get text response
        console.log('DELETE request successful:', result);
        return result; // Return text response
    } catch (error) {
        console.error('Error during DELETE request:', error);
    }
    return null; // Return null in case of error
}
