function status(request, response) {
  response.status(200).json({
    chave: "Seu sistema de Gestão OPME",
  });
}

export default status;
