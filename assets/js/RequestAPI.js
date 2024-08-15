
const URL_BASE = "https://pdmxsxggktrbgplirgvi.supabase.co/rest/v1";
const HEADERS = {
    "Content-Type":"application/json",
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw'
}

const requestAllSkins = async () => {
  try {
    const response = await fetch(URL_BASE + '/skins', {
        method: 'GET',
        headers: HEADERS       
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    return json

  } catch (error) {
      console.error(error.message);
  }
}

const createComent = async (data) => {
  try {
    const response = await fetch(URL_BASE + '/comments', {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(data)
      }
    );
    if (!response.status === 201) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
      throw new Error(error.message);
  }
}

const requestByIdWithComents = async (id) => {
  try {
    const response = await fetch(URL_BASE + '/rpc/get_joined_data', {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({ p_id: parseInt(id)})
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    return json
  } catch (error) {
      console.error(error.message);
  }
}

const requestById = async (id) => {
  try {
    const response = await fetch(URL_BASE + `/skins?id=eq.${id}`, {
        method: 'GET',
        headers: HEADERS
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    return json
  } catch (error) {
      console.error(error.message);
  }
}

window.utilsApi = { requestAllSkins, requestByIdWithComents, requestById, createComent }

