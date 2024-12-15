const API_URL = 'http://localhost:8001';

export async function insertNewGuest(guest) {
    const response = await fetch(`${API_URL}/add_guest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guest),
    });

    if (!response.ok) {
        throw new Error('Failed to insert new guest');
    }

    return response.json();
}
