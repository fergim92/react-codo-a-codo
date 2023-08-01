let getNameAsync = async (idPost)=>{

    try { 
      let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);/*utilizo el await porque esta peticion puede llegar o no*/
      let post = await  resPost.json() /*Si llego esta informacion me quedo con el json */

      let resUser = await   fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      let user = await resUser.json()

      document.write(`${user.name} vive en ${user.address.city} escribio el post ${idPost}: ${post.title}`) 

    } catch (error) {
        console.log(error);
    }

}

getNameAsync(80)