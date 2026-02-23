export const getData =async(endpoint:string)=>{
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers:{
                "Content-Type":"application/json"
            },
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch {
        return null;
    }
}