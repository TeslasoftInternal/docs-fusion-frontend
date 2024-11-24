export const runApi = async (type, param, file) => {
    const base_url = "http://localhost:5000/api/v1/"
    const api_url = base_url + type

    const formData = new FormData();
    formData.append('file', file[0]);
    if (param !== undefined && param != null) formData.append('query', param);
    formData.append('filetype', file[0].name.split('.').pop());
    formData.append('filename', file[0].name);

    const response = await fetch(api_url, {
        method: 'POST',
        body: formData
    });

    return await response.json();
}
