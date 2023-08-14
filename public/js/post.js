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
  
const updatedPostHandler = async(event) => {
    event.preventDefault();

    const updatedPost = event.target.id;
    const name = event.target[0].value;
    const text = event.target[1].value;

    if (updatedPost)
    {
        if (name || text)
        {
            await fetch(`/api/dashboard/${updatedPost}`, {
                method: 'PUT',
                body: JSON.stringify({name, text}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
      .then((data) => { 
        document.location.reload()
      })
    }
        alert('Failed to update post');
}};