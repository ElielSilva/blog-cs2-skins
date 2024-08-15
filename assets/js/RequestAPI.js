
const requestAllSkins = async () => {
  const URL = "https://pdmxsxggktrbgplirgvi.supabase.co/rest/v1/skins";
  try {
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
          "Content-Type":"application/json",
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw'
        }
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    console.log(json)
    //window.arraySkins = Object.values(json)
    return json

  } catch (error) {
      console.error(error.message);
  }
}

const requestByIdWithComents = async (id) => {
  const URL = "https://pdmxsxggktrbgplirgvi.supabase.co/rest/v1/rpc/get_joined_data";
  try {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json",
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw'
        },
        body: JSON.stringify({ p_id: parseInt(id)})
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    console.log(json)
    //window.arraySkins = Object.values(json)
    return json

  } catch (error) {
      console.error(error.message);
  }
}

const requestById = async (id) => {
  const URL = `https://pdmxsxggktrbgplirgvi.supabase.co/rest/v1/skins?id=eq.${id}`;
  try {
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
          "Content-Type":"application/json",
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbXhzeGdna3RyYmdwbGlyZ3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTU5MTUsImV4cCI6MjAzNzMzMTkxNX0.W02miXj37LQsKOwJPQxdfGbD5iXKuwsvE7fMt_Z6Juw'
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json()
    console.log(json)
    //window.arraySkins = Object.values(json)
    return json

  } catch (error) {
      console.error(error.message);
  }
}

window.utilsApi = { requestAllSkins, requestByIdWithComents, requestById }

