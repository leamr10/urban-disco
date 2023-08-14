const newPostHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-name').value();
    const text = document.querySelector('#post-text').value();
  
    if (name && text) {
      const response = await fetch(`/api/dashboard`, {
        method: 'POST',
        body: JSON.stringify({ name, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      .then((res) => res.json())
      .then((data) => { 
        document.location.reload()
      })
      }
        alert('Failed to create post');
      };
  
