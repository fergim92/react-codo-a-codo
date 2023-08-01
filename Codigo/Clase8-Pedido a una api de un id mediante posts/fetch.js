const getNamefetch = (idPost) => {  /* => recibe un CallBack */
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`) /*traemos el post de alguien, La URL de donde traemos esa info se suele llamar EndPoint, el servidor devuelve una promesa porque no vamos a saber si el servidor esta caido o va a devolver el dato, por ende estamos realizando un pedido asicronico */
    .then((res) => {   /* Agarro la respuesta y me quedo solo con el json */
      /*  console.log(res) */
      return res.json();
    })
    .then((post) => { /* => recibe un CallBack */
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`) /* traemos el user que hizo ese post
        .then((res) => {
          /*  console.log(res) */
          return res.json(); /*me quedo con el json de ese user*/
        })
        .then((user) => {  /* => recibe un CallBack */
          console.log(
            `${user.name} escribio el post ${idPost} y vive en ${user.address.city}`
          );
        });
    });  
    } catch (error) {
        console.log(error);
    }
};
getNamefetch(11);
