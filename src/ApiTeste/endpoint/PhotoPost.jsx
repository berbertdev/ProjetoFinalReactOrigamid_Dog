import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('peso', peso);
    formData.append('idade', idade);
    formData.append('nome', nome);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  //asdfasdfasdfasdf123421342134

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={token}
        placeholder="token"
        onChange={({ target }) => setToken(target.value)}
      />{' '}
      <input
        type="text"
        value={nome}
        placeholder="nome"
        onChange={({ target }) => setNome(target.value)}
      />{' '}
      <input
        type="text"
        value={peso}
        placeholder="peso"
        onChange={({ target }) => setPeso(target.value)}
      />{' '}
      <input
        type="text"
        value={idade}
        placeholder="idade"
        onChange={({ target }) => setIdade(target.value)}
      />{' '}
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};
export default PhotoPost;
